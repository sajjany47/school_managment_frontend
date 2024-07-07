import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { SideMenu } from "../Config/SideMenu";

const SideBar = () => {
  return (
    <>
      <Sidebar>
        <Menu
          menuItemStyles={{
            button: {
              // the active class will be added automatically by react router
              // so we can use it to style the active menu item
              [`&.active`]: {
                backgroundColor: "#13395e",
                color: "#b6c8d9",
              },
            },
          }}
        >
          {/* <SubMenu label="Charts">
            <MenuItem> Pie charts </MenuItem>
            <MenuItem> Line charts </MenuItem>
          </SubMenu> */}
          {SideMenu.teacherMenu.map((item, index) => (
            <MenuItem key={index}>{item.name}</MenuItem>
          ))}
        </Menu>
      </Sidebar>
      ;
    </>
  );
};

export default SideBar;
