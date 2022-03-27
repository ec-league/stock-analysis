import React, { Fragment } from 'react';
import { Layout, Icon } from 'antd';
import GlobalFooter from '@/components/GlobalFooter';

const { Footer } = Layout;
const FooterView = () => (
  <Footer style={{ padding: 0 }}>
    <GlobalFooter
      links={[
        {
          key: 'Athena 首页',
          title: 'Athena 首页',
          href: '/model-apply-dashboard',
          blankTarget: true,
        },
      ]}
      copyright={
        <Fragment>
          Copyright <Icon type="copyright" /> 2019 美团金服生态金融风险组出品
        </Fragment>
      }
    />
  </Footer>
);
export default FooterView;
