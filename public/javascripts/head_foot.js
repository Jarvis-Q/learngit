jQuery(document).ready(function($) {
    //显示二级菜单
    $('.gd-nav li a').hover(function(e) {
        var $target = $(this);
        var relId = $(this).parent().attr('trigger-id');
        var $menuNode = $('.child-menu');
        var $menuContentNode = $menuNode.find('.' + relId);
        var $menuContentNodes = $menuNode.find('.menu-name');
        var $arrowNode = $('.arrow')

        if (!$menuContentNode.length) {
            $menuNode.hide();
            return;
        };

        //文字中心点偏移距离
        var centerLeft = $(this).offset().left + $(this).outerWidth() / 2;
        $menuNode.show();
        $menuContentNodes.hide().removeAttr('style');
        $arrowNode.css('left', centerLeft - $arrowNode.outerWidth() / 2);
        $menuContentNode.fadeIn(300).css({
            marginLeft: centerLeft - $menuContentNode.outerWidth() / 2
        });
    }, function(e) {
        //if (e.target)
    });
});