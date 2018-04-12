<template>
    <div class="layout">
        <Header>
            <Menu mode="horizontal" theme="dark" active-name="1">
                <div class="layout-logo"></div>
                <div class="layout-nav">
                    <MenuItem name="1">
                        <Icon type="help-circled"></Icon>
                        解答
                    </MenuItem>
                    <MenuItem name="2">
                        <Icon type="refresh"></Icon>
                        刷新
                    </MenuItem>
                    <MenuItem name="3">
                        <Icon type="chatbubble-working"></Icon>
                        咨询
                    </MenuItem>
                    <MenuItem name="4">
                        <Icon type="person"></Icon>
                        个人
                    </MenuItem>
                </div>
            </Menu>
        </Header>
        <Layout :style="{minHeight: '100vh'}">
            <Sider collapsible :collapsed-width="78" v-model="isCollapsed" >
                <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses" :open-names="['1']">
                    <Submenu  name="1">
                        <template slot="title">
                            <Icon type="clipboard"></Icon>
                            <span>订单</span>
                        </template>
                        <MenuItem name="1-1">入库单明</MenuItem>
                        <MenuItem name="1-2">出库/发货单</MenuItem>
                        <MenuItem name="1-3">退货单</MenuItem>
                        <MenuItem name="1-4">订单商品明细</MenuItem>                        
                    </Submenu >
                    <Submenu  name="2">
                        <template slot="title">
                            <Icon type="bag"></Icon>
                            <span>商品</span>
                        </template>
                        <MenuItem name="2-1">商品列表</MenuItem>
                        <MenuItem name="2-2">商品图片</MenuItem>
                        <MenuItem name="2-3">商品品牌</MenuItem>
                        <MenuItem name="2-4">商品价格</MenuItem>
                        
                    </Submenu >
                    <Submenu  name="3">
                        <template slot="title">
                            <Icon type="settings"></Icon>
                            <span>库存</span>
                        </template>
                        <MenuItem name="3-1">库存状况</MenuItem>
                        <MenuItem name="3-2">入库单</MenuItem>
                        <MenuItem name="3-3">出库单</MenuItem>
                        <MenuItem name="3-4">仓库管理</MenuItem>
                        <MenuItem name="3-5">常用物流公司</MenuItem>
                    </Submenu >
                    <Submenu  name="4">
                        <template slot="title">
                            <Icon type="settings"></Icon>
                            <span>库存</span>
                        </template>
                        <MenuItem name="4-1">库存状况</MenuItem>
                        <MenuItem name="4-2">入库单</MenuItem>
                        <MenuItem name="4-3">出库单</MenuItem>
                        <MenuItem name="4-4">仓库管理</MenuItem>
                        <MenuItem name="4-5">常用物流公司</MenuItem>
                    </Submenu >
                    <Submenu  name="5">
                        <template slot="title">
                            <Icon type="settings"></Icon>
                            <span>客户</span>
                        </template>
                        <MenuItem name="5-1">客户列表</MenuItem>
                    </Submenu >
                    <Submenu  name="6">
                        <template slot="title">
                            <Icon type="settings"></Icon>
                            <span>资金</span>
                        </template>
                        <MenuItem name="6-1">订单应付款</MenuItem>
                        <MenuItem name="6-2">收支明细</MenuItem>
                        <MenuItem name="6-3">支付记录</MenuItem>
                    </Submenu >
                    <!-- <Submenu  name="7">
                        <template slot="title">
                            <Icon type="settings"></Icon>
                            <span>库存</span>
                        </template>
                        <MenuItem name="4-1">库存状况</MenuItem>
                        <MenuItem name="4-2">收支明细</MenuItem>
                        <MenuItem name="4-3">出库单</MenuItem>
                        <MenuItem name="4-4">仓库管理</MenuItem>
                        <MenuItem name="4-5">常用物流公司</MenuItem>
                    </Submenu > -->
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">112221</Header>
                <Content :style="{padding: '0 16px 16px'}">
                    <Breadcrumb :style="{margin: '16px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <!-- <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem> -->
                    </Breadcrumb>
                    <!-- main -->
                    <Card>
                        <div style="height: 600px">Content</div>
                    </Card>
                </Content>
            </Layout>
        </Layout>
    </div>
</template>
<script>
import './homeFrame.css'
import './home.scss';

export default {
  data () {
      return {
          isCollapsed: false
      };
  },
  methods: {
      
  },
  mounted () {
      
  },
  computed: {
    menuitemClasses: function () {
        return [
            'menu-item',
            this.isCollapsed ? 'Collapsed-menu' : ''
        ]
    }
  }
}
</script>
