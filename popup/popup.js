const app = new Vue({
  el: "#app",
  data: {
    email: "",
    emailErr: "",
    pwd: "",
    pwdErr: "",
    bookmark: "",
    url: "",
    ok: 0,
    token: localStorage.getItem("token"),
    loading: false,
  },
  watch: {
    email (now) {
      console.log(now.trim());
      this.emailErr = !now.trim() ? this.emailErr : "";
    },
    pwd (now) {
      this.pwdErr = !now.trim() ? this.pwdErr : "";
    }
  },
  created() {
    this.getTabInfo();
  }, 
  methods: {
    cancel() {
      this.ok = 0;
    },
    getTabInfo() {
      if (this.token) {
        chrome.tabs.getSelected(null, function (tab) {
          let { title, url } = tab;
          this.bookmark = title;
          this.url = url;
        }.bind(this));
      }
    },
    loginSubmit() {
      let verify = this.accountVerify();
      if (verify) {
        this.loginAjax();
      }
    },
    accountVerify() {
      var errNum = [];
      var email = this.email;
      var pwd = this.pwd;
      if (!email.trim()) {
        this.emailErr = "账户不能为空";
        errNum.push(1);
      }
      if (!pwd.trim()) {
        this.pwdErr = "密码不能为空";
        errNum.push(1);
      }
      return errNum.length != 0 ? false : true;
    },
    loginAjax() {
      this.loading = true;
      setTimeout(
        function () {
          localStorage.setItem("token", "4a812x81a18c7ge5s");
          this.token = "4a812x81a18c7ge5s";
          this.loading = false;
          this.getTabInfo();
        }.bind(this),
        2000
      );
    },
    saveSubmit() {
      this.saveAjax();
    },
    saveAjax() {
      this.loading = true;
      setTimeout(
        function () {
          this.ok = Math.floor(Math.random()*2) + 1;
          this.loading = false;
        }.bind(this),
        2000
      );
    }
  }
});