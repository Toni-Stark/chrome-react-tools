import React from 'react';
import './Options.css';

interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  return (
    <div className="OptionsContainer">
      <div className="SettingViews">
        <div className="SettingTabs">
          <div className="SettingTitle">菜单栏</div>
          <div className="SettingList">
            <div className="active">数据录入管理</div>
            <div>工具状态管理</div>
            <div>插件配置管理</div>
            <div>服务接口管理</div>
          </div>
        </div>
        <div className="SettingContent">
          <div className="SettingItem">
            京东数据
            <div className="ChangeTime">最近更新：6/14 17:38</div>
          </div>
          <div className="SettingItem">
            拼多多数据
            <div className="ChangeTime">最近更新：6/14 17:38</div>
          </div>
          <div className="SettingItem">
            淘宝数据
            <div className="ChangeTime">最近更新：6/14 17:38</div>
          </div>
          <div className="SettingItem">
            百姓网数据
            <div className="ChangeTime">最近更新：6/14 17:38</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
