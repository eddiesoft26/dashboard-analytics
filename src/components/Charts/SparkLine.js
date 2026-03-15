import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'

function SparkLine({id, height, width, color, currentColor, type, data}) {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWidth={2}
      valueType='Numeric'
      fill={color}
      border={{color: currentColor, width: 2}}
      dataSource={data}
      xName='x'
      yName='yval'
      type={type}
      tooltipSettings={{
        visible: true,
        format: '${x} : data ${yval}',
        trackLineSettings: {
          visible: true,
        }
      }}
      markerSettings={{
        visible: ['All'],
        size: 5,
        fill: '#000000'
      }}
      
      >
      <Inject services={[SparklineTooltip]} />
    </SparklineComponent>
  )
}

export default SparkLine