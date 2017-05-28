import React from 'react';
import {Row, Col} from 'antd';

/**
 * 自定义组件实现单条数据更新
 */
class AcceptAgentApply extends React.PureComponent {
  state = {
    status: -1,
    needApply: true,
  };

  componentWillMount() {
    // 当前选中的那条记录, 会以props.record的形式传进来
    this.state.status = this.props.record.$$rawData.status;
  }

// 账号状态0：申请；1：绑定；2：解绑
  componentDidMount() {
    if (this.state.status === 0) {
      this.setState({
        needApply: true,
        status: 1,
      })

    } else {
      this.setState({
        needApply: false,
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    this.state.status = nextProps.record.$$rawData.status;
  }

  /**
   * 自定义的组件如果实现了这个方法, DBTable组件就会根据返回结果去更新对应的记录
   * 如果不实现这个方法, 或者这个方法返回的是false/undefined, 那就不做任何事
   * 如果是antd的Form.create()包装过的组件, 就不用自己实现这个方法了
   *
   * @returns {{status: number}}
   */
  getFieldsValue() {
    return {status: this.state.status};
  }

  render() {
    var text = '';
    if (this.state.needApply) {
      text = '确认审批通过？';
    } else {
      text = '无需审批';
    }
    return (
      <Row>
        <Col span={12}>
          {text}
        </Col>
      </Row>
    );
  }
}

class AcceptJoininApply extends React.PureComponent {
  state = {
    status: -1,
    needApply: true,
  };

  componentWillMount() {
    // 当前选中的那条记录, 会以props.record的形式传进来
    this.state.status = this.props.record.$$rawData.status;
  }

// 账号状态0：申请；1：绑定；2：解绑
  componentDidMount() {
    if (this.state.status === 0) {
      this.setState({
        needApply: true,
        status: 1,
      })

    } else {
      this.setState({
        needApply: false,
      })
    }
  }

  componentWillReceiveProps(nextProps) {
    this.state.status = nextProps.record.$$rawData.status;
  }

  /**
   * 自定义的组件如果实现了这个方法, DBTable组件就会根据返回结果去更新对应的记录
   * 如果不实现这个方法, 或者这个方法返回的是false/undefined, 那就不做任何事
   * 如果是antd的Form.create()包装过的组件, 就不用自己实现这个方法了
   *
   * @returns {{status: number}}
   */
  getFieldsValue() {
    return {status: this.state.status};
  }

  render() {
    var text = '';
    if (this.state.needApply) {
      text = '确认审批通过？';
    } else {
      text = '无需审批';
    }
    return (
      <Row>
        <Col span={12}>
          {text}
        </Col>
      </Row>
    );
  }
}

export {AcceptJoininApply, AcceptAgentApply};
