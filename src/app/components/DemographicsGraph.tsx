import * as React from 'react';
import { ResponsivePie, PieDatum } from '@nivo/pie';

interface Props {
  chartData: PieDatum[] | null;
}

class DemographicsGraph extends React.Component<Props> {
  public render() {
    const { chartData } = this.props;
    return (
      <ResponsivePie
        data={chartData || []}
        margin={{
          top: 40,
          right: 80,
          bottom: 80,
          left: 80,
        }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        colors="nivo"
        colorBy="id"
        borderWidth={1}
        borderColor="inherit:darker(0.2)"
        radialLabelsSkipAngle={10}
        radialLabelsTextXOffset={6}
        radialLabelsTextColor="#333333"
        radialLabelsLinkOffset={0}
        radialLabelsLinkDiagonalLength={16}
        radialLabelsLinkHorizontalLength={24}
        radialLabelsLinkStrokeWidth={1}
        radialLabelsLinkColor="inherit"
        slicesLabelsSkipAngle={10}
        slicesLabelsTextColor="#333333"
        animate={true}
        motionStiffness={90}
        motionDamping={15}
        defs={[
          {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true,
          } as any,
          {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[]}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            translateY: 56,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: '#999',
            symbolSize: 18,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#000',
                },
              },
            ],
          } as any,
        ]}
      />
    );
  }
}

export default DemographicsGraph;
