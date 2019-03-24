var vm = new Vue({
	el : '#app',
	data : {
		shoplist: [],
		totalmoney: 0,
		checkmsg: "✔"
	},
	mounted () {
		this.cartView();
	},
	methods: {
		cartView () {
			this.$http.get("data/cartinfo.json")
			// .then(res => {
			// 	this.shoplist = res.body.result.list;
			// 	this.calTotalMoney ();
			// 	//console.log(this.shoplist);
			// })
			.catch(res => {
				//console.log(err);
				this.shoplist = res.body.result.list;
				this.calTotalMoney ();
			})
		},
		moneychanger (item, flag) {
			if(flag > 0){
				item.productQuentity ++;
			}else{
				if(item.productQuentity <= 1){
					return{}
				}
				else{
					item.productQuentity --;
				}
			};
			this.calTotalMoney ();
		},
		checkProduct (item, index) {
			if(typeof item.checked == "undefined"){
				this.$set(item, "checked", true);
				document.getElementsByClassName("check")[index].setAttribute("value",this.checkmsg); 
			}else{
				if(item.checked == true){
					document.getElementsByClassName("check")[index].removeAttribute("value");
				}else{
					document.getElementsByClassName("check")[index].setAttribute("value",this.checkmsg);
				};
				item.checked = !item.checked;
			};
			this.calTotalMoney ();
			//console.log(item)
		},
		allchecks (flag) {
			var _this = this;
			this.shoplist.forEach(function (value, index) {
				if(typeof value.checked == "undefined"){
					_this.$set(value, "checked", flag)
				}else{
					value.checked = flag
				}
			});
			var getDom = document.getElementsByClassName("check");
			if(flag == true ){
				for(var i=0;i<getDom.length;i++){
		            getDom[i].setAttribute("value",this.checkmsg); 
		            this.calTotalMoney ();
	            //getDom[i].setAttribute("class","icon-ok-sign")
	        	}
	        }else{
	        	for(var i=0;i<getDom.length;i++){
		            getDom[i].removeAttribute("value"); 
		            this.calTotalMoney ();
	            //getDom[i].setAttribute("class","icon-ok-sign")
	        	}
	        };
	        //console.log(this.shoplist)
		},
		calTotalMoney () {
			this.totalmoney = 0;
			var _this = this;
			this.shoplist.forEach(function (item, index) {
				if(item.checked == 1){
					_this.totalmoney += item.productPrice * item.productQuentity
				}else{
					return{}
				}
			});
		}
	}
})