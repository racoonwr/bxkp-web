import React from 'react';
import './index.less';

/**
 * 展示欢迎界面
 */
class Welcome extends React.PureComponent {

  render() {
    return (
      <div>
        <h1 className="welcome-text">
          Welcome, 欢迎使用保险卡片管理系统
        </h1>
      </div>
    );
  }

}

export default Welcome;
