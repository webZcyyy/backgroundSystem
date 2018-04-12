<template>
    <div class="layout">
        <Header>
            <Menu mode="horizontal" theme="dark" active-name="1">
                <div class="layout-logo"></div>
                <div class="layout-nav">
                    <MenuItem name="1">
                        <Icon type="ios-navigate"></Icon>
                        Item 1
                    </MenuItem>
                    <MenuItem name="2">
                        <Icon type="ios-keypad"></Icon>
                        Item 2
                    </MenuItem>
                    <MenuItem name="3">
                        <Icon type="ios-analytics"></Icon>
                        Item 3
                    </MenuItem>
                    <MenuItem name="4">
                        <Icon type="ios-paper"></Icon>
                        Item 4
                    </MenuItem>
                </div>
            </Menu>
        </Header>
        <Layout :style="{minHeight: '100vh'}">
            <Sider collapsible :collapsed-width="78" v-model="isCollapsed" >
                <Menu active-name="1-2" theme="dark" width="auto" :class="menuitemClasses" :open-names="['1']">
                    <Submenu  name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                            <span>item 1</span>
                        </template>
                        <MenuItem name="1-1">Option 1</MenuItem>
                        <MenuItem name="1-2">Option 2</MenuItem>
                        <MenuItem name="1-3">Option 3</MenuItem>
                    </Submenu >
                    <Submenu  name="2">
                        <template slot="title">
                            <Icon type="search"></Icon>
                            <span>item 2</span>
                        </template>
                        <MenuItem name="2-1">Option 1</MenuItem>
                        <MenuItem name="2-2">Option 2</MenuItem>
                        <MenuItem name="2-3">Option 3</MenuItem>
                    </Submenu >
                    <Submenu  name="3">
                        <template slot="title">
                            <Icon type="settings"></Icon>
                            <span>item 3</span>
                        </template>
                        <MenuItem name="3-1">Option 1</MenuItem>
                        <MenuItem name="3-2">Option 2</MenuItem>
                        <MenuItem name="3-3">Option 3</MenuItem>
                    </Submenu >
                </Menu>
            </Sider>
            <Layout>
                <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
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
