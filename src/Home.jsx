import React, { useState } from "react";
import {
  Card,
  Text,
  List,
  StandardListItem,
  ValueState,
  ProgressIndicator,
  Title,
  TitleLevel,
  FlexBox,
  FlexBoxJustifyContent,
  FlexBoxWrap,
  FlexBoxDirection,
  AnalyticalTable,
  Icon
} from "@ui5/webcomponents-react";
import { spacing } from "@ui5/webcomponents-react-base";
import { BarChart, LineChart } from "@ui5/webcomponents-react-charts";
import "@ui5/webcomponents-icons/dist/icons/horizontal-bar-chart.js";
import "@ui5/webcomponents-icons/dist/icons/line-chart.js";
import "@ui5/webcomponents-icons/dist/icons/list.js";
import "@ui5/webcomponents-icons/dist/icons/table-view.js";
import { useHistory } from "react-router-dom";
import { MyCustomElement } from "./MyCustomElement";

export function Home() {
  const [toggleCharts, setToggleCharts] = useState("lineChart");
  const [loading, setLoading] = useState(false);

  const handleHeaderClick = () => {
    if (toggleCharts === "lineChart") {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setToggleCharts("barChart");
      }, 2000);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setToggleCharts("lineChart");
      }, 2000);
    }
  };
  const history = useHistory();
  const handleProgressHeaderClick = () => {
    history.push("/detail");
  };
  const datasets = [
    {
      label: "公众号关注人数统计",
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ];
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July"
  ];
  const tableData = new Array(500).fill(null).map((_, index) => {
    return {
      name: `name${index}`,
      age: Math.floor(Math.random() * 100),
      friend: {
        name: `friend.Name${index}`,
        age: Math.floor(Math.random() * 100)
      }
    };
  });

  const tableColumns = [
    {
      Header: "Name",
      accessor: "name" // String-based value accessors!
    },
    {
      Header: "Age",
      accessor: "age"
    },
    {
      Header: "Friend Name",
      accessor: "friend.name"
    },
    {
      Header: "Friend Age",
      accessor: "friend.age"
    }
  ];
  const contentTitle =
    toggleCharts === "lineChart" ? "Line Chart" : "Bar Chart";
  const switchToChart =
    toggleCharts === "lineChart" ? "Bar Chart" : "Line Chart";
  return (
    <FlexBox
      justifyContent={FlexBoxJustifyContent.Center}
      wrap={FlexBoxWrap.Wrap}
    >
    
      <Card
        avatar={
          <Icon
            name={
              toggleCharts === "lineChart"
                ? "line-chart"
                : "horizontal-bar-chart"
            }
          />
        }
        heading="公众号关注人数增长统计"
        headerInteractive
        onHeaderClick={handleHeaderClick}
        subtitle={`点击此处切换成 ${switchToChart}`}
        style={{ width: "300px", ...spacing.sapUiContentPadding }}
      >
        <Text style={spacing.sapUiContentPadding}>{contentTitle}</Text>
        {toggleCharts === "lineChart" ? (
          <LineChart datasets={datasets} labels={labels} loading={loading} />
        ) : (
          <BarChart datasets={datasets} labels={labels} loading={loading} />
        )}
      </Card>
      <Card
        heading="Kubernetes学习进度"
        subtitle="List"
        style={{ width: "300px", ...spacing.sapUiContentPadding }}
        headerInteractive
        onHeaderClick={handleProgressHeaderClick}
        avatar={<Icon name="list" />}
      >
        <List>
          <StandardListItem info="已完成" infoState={ValueState.Success}>
            Linux基础知识学习
          </StandardListItem>
          <StandardListItem info="遇到问题" infoState={ValueState.Error}>
            环境搭建
          </StandardListItem>
          <StandardListItem
            info="正在进行"
            infoState={ValueState.Warning}
            style={{ height: "80px" }}
          >
            <FlexBox direction={FlexBoxDirection.Column}>
              <Title level={TitleLevel.H5}>Docker知识学习</Title>
              <ProgressIndicator
                displayValue="89%"
                percentValue={89}
                width="180px"
                state={ValueState.Success}
              />
            </FlexBox>
          </StandardListItem>
          <StandardListItem
            info="刚刚开始"
            infoState={ValueState.Warning}
            style={{ height: "80px" }}
          >
            <FlexBox direction={FlexBoxDirection.Column}>
              <Title level={TitleLevel.H5}>Kubernetes源码阅读</Title>
              <ProgressIndicator
                displayValue="5%"
                percentValue={5}
                width="180px"
                state={ValueState.Error}
              />
            </FlexBox>
          </StandardListItem>
        </List>
      </Card>
      <Card
        heading="AnalyticalTable"
        style={{ maxWidth: "900px", ...spacing.sapUiContentPadding }}
        avatar={<Icon name="table-view" />}
      >
        <AnalyticalTable
          data={tableData}
          columns={tableColumns}
          visibleRows={5}
        />
      </Card>
    </FlexBox>
  );
}