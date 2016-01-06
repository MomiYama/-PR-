;(function (d, $) {

  var jQdm_slideMenu;

  jQdm_slideMenu = function(){

    // 初期設定
    var prop = {
    	deferredImage: 'img.deferred',
    	subContainer: '#subContainer',
    	mainNavigation_trigger: '.mainNavigation_trigger',
    	mainNavigation_appear: '.appeared'
    }

    function init(){

      // スライドメニューの開閉ボタンの設定
    	$(prop.mainNavigation_trigger).find('a').on('click', function(){
    		$(prop.subContainer).toggleClass(replaceString(prop.mainNavigation_appear));
    	});

	  }

		// 文字列置換処理
    function replaceString(_str, _bf, _af, _flg){
      var _reg = new RegExp(_bf || '[\\.#]', _flg || '');
      return _str ? _str.replace(_reg, _af || '') : false;
    }

    init();

  };

  jQdm_slideMenu();

})(document, jQuery);