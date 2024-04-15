import React from 'react'
import { theme } from 'antd'
function Category() {
    const {
        token: { colorBgContainer, borderRadiusLG },
      } = theme.useToken();
  return (
    <div
    // style={{
    //   padding: 24,
    //   minHeight: 360,
    //   background: colorBgContainer,
    //   borderRadius: borderRadiusLG,
    // }}
  >
    Bill is a cat.
  </div>
  )
}

export default Category
