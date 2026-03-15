import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import './App.css';

import {
  NavBar, Footer, SideBar, ThemeSettings
} from './components';

import {
  Ecommerce, Orders, Calendar, Employees, Stacked,
  Pyramid, Customers, KanBan, Line, Area, Bar,
  Pie, Financial, ColorPicker, ColorMapping, Editor
} from './pages';

import { useStateContext } from './contexts/ContextProvider';

function App() {
  const { activeMenu, setActiveMenu, themeSettings, setThemeSettings, currentColor, currentMode } = useStateContext();
  // const activeMenu = true;

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        {/* Settings Button */}
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4 z-[1000]">
            <TooltipComponent content="Settings" position="Top">
              <button
                type="button"
                className="text-3xl p-3 hover:drop-shadow-xl hover:bg-light-gray text-white"
                style={{ backgroundColor: currentColor, borderRadius: '50%' }}
                onClick={() => setThemeSettings(true)}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
        </div>

        {/* Layout */}
        <div className="flex dark:bg-main-dark-bg">
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white z-50">
              <SideBar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <SideBar />
            </div>
          )}

          {/* Main Content Area */}
          <div className={`dark:bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
            {/* Navbar */}
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <NavBar />
            </div>

            { themeSettings && <ThemeSettings /> }

            {/* Routes & Pages */}
            <div className="p-4 bg-main-bg">
              <Routes>
                {/* Dashboard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* Pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* Apps */}
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/kanban" element={<KanBan />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
