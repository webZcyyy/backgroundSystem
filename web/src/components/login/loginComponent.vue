<template>
  <div class="login">
    <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%'}">
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

            <!-- main content -->
            <Content :style="{margin: '88px 20px 0', background: '#fff', minHeight: '500px'}">
                Content
                <Input v-model="telphone" placeholder="Enter telphone..." @blur="user" clearable style="width: 200px"></Input><br />
                <Input v-model="password" v-if="show" placeholder="Enter password..." clearable style="width: 200px"></Input>
                <Button type="success" short @click="submit">SUBMIT</Button>
            </Content>
            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
        </Layout>
    </div>
  </div>
</template>
<script>
import '../../sass/commonStyle/iviewHead.css';
import './login.scss'
export default {
  data () {
      return {
        telphone: '',
        password: '',
        show: false
      }
  },
  mounted () {
      
  },
  methods: {
      submit:()=>{
        // console.log(this.password)

      },
      user:()=>{
        console.log(6666)
      }
  }
  

}
</script>
