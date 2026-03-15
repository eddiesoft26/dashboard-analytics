import React from 'react'
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs'

import { Header } from '../components'

function ColorPicker() {

  function change(args){
    return document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
  }
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
        <Header 
          category='App'
          title='Color Picker'
        />

        <div className='center'>
          <div id='preview' />
          <div className='flex justify-center items-center gap-20 flex-wrap'>
            <div>
              <p className='text-2xl font-semibold mt-2 mb-4'>
                Inline Pallete
              </p>
              <ColorPickerComponent
                id='inline-palete'
                modeSwitcher={false}
                mode='Palette'
                inline
                showButtons={false}
                change={change}
                >
              </ColorPickerComponent>
            </div>
            <div>
              <p className='text-2xl font-semibold mt-2 mb-4'>
                Color Picker
              </p>
              <ColorPickerComponent
                id='inline-pallete'
                modeSwitcher={false}
                mode='Picker'
                inline
                showButtons={false}
                change={change}
                >
              </ColorPickerComponent>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ColorPicker