import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Sort, Toolbar, Page, Selection, Edit, Filter, Inject } from '@syncfusion/ej2-react-grids';
import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';

function Customers() {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>

      <Header 
        title='Customers' 
        category='Page'
      />

      <GridComponent
      dataSource={customersData}
       allowPaging
       allowFiltering
       allowSorting
       editSettings={{ allowDeleting: true, allowEditing: true }}
       toolbar={['Delete']}
       width='auto'>
        
        <ColumnsDirective>
          {customersGrid.map((item, index) => (
            <ColumnDirective 
              key={index} {...item}/>
          ))}
        </ColumnsDirective>
        <Inject services={[ Page, Sort, Toolbar, Selection, Edit, Filter, ]}/>
      </GridComponent>
    </div>
  )
}

export default Customers