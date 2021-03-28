$(document).ready(function() {
  $('.login-bar').wrap('<div class="login-bar-wrapper"></div>');
  $('#module_contact_top').appendTo('.login-bar');
  $('.menu').appendTo('.logo-bar');
  $('#module_additional_menu').insertAfter('.logo-bar');
  $('.breadcrumbs').prependTo('.centercol');
  $('#box_newsletter .innerbox').addClass('container');
  $('#module_certificates .innerbox').addClass('container');
  $('footer .innerfooter ul.overall').addClass('container');
  $('#box_productfull .f-grid-6 > .availability').insertAfter('#box_productfull .basket');
  $('#box_productfull .links-q').appendTo('#box_productfull .maininfo');
  $('#module_product_phone .row').prependTo('#box_productfull .productdetails-more');
  $('#box_productrelated').appendTo('.innermain');
  $('#box_productcomments').appendTo('.innermain');
  $("#box_mainproducts h1.category-name").insertBefore(".categorydesc .text-description")
  $('.categorydesc .description-up').insertAfter($('#box_mainproducts .boxhead'));
  $('.categorydesc .description-down').insertAfter($('#box_mainproducts'));
  $('#module_bottom_banner').insertAfter('#shoper-foot');
  $('.shop_basket_done .banner-final').prependTo('#box_basketfinal');
  
  // BLOG CATEGORIES
  //if ($('.bred-3.last').length > 0){
  //  let categoryName = $('.bred-3.last span:last-child').text();
  //  $('#box_article_categories .boxhead span').text(categoryName).trim()
  //}
 
  	if ($('#box_articlelist').length > 0){
      $('#box_articlelist article').each(function(k,v){
        $('.article-name', v).insertAfter($('.article-image', v));
        $('.row.article-info', v).insertAfter($('.article-name', v));
      });
    }
    if ($('body').hasClass('shop_news_list') || $('body').hasClass('shop_news_category_list')){
      $('.article-content strong').each(function(k,v){
        $(v).text($(v).text().substr(0, 90) + '...');
      });    
  	}
  
  	if ($('body').hasClass('shop_news')){
      $('#box_article_categories').remove();
    } 
	
  
  $('header .logo-bar .basket .countlabel > span').text(function(_, txt) {
    return txt.slice(0, -1);
  });

  $('#cart-options .buttons .forward span').text(function(_, txt) {
    return txt.slice(0, -1);
  });
  
  if ($( ".products.viewfull .product" ).length) {
    $( ".products.viewfull .product" ).each(function() {
      var $this = $(this);
      var $avail = $this.find('.avail');
      var $deliv = $this.find('.deliv');
      var $basket = $this.find('.basket');
      var $desc = $this.find('.description');

      $desc.append('<div class="eco-cert"></div>', $avail, $deliv, $basket);
    });
  }
  
  if ($( ".products.viewdesc .product" ).length) {
    $( ".products.viewdesc .product" ).each(function() {
      var $this = $(this);
      var $avail = $this.find('.avail');
      var $deliv = $this.find('.deliv');
      var $basket = $this.find('.basket');
      var $desc = $this.find('.description');

      $desc.append('<div class="eco-cert"></div>', $avail, $deliv, $basket);
    });
  }
  

  $('.bottom-footer .box').each(function() {
    $(this).addClass('container');
  });

  // $('#box_articlelist article').each(function() {
  //   var $this = $(this);
  //   var $image = $this.find('.article-image');
  //   $image.prependTo($this).wrap('<div class="image-wrapper"></div>');
  // });
  
  
  $("#additional-menu a").click(function (ev) {
    ev.preventDefault();
    
    $("#additional-menu a.active").toggleClass("active");
    $(this).toggleClass("active");
    var selector = $(this).attr("href");
    $(".tab.active").removeClass("active");
    $(selector).addClass("active")
  })
  
  
  if ($("body.shop_product").length) {
    
    $("#box_productcomments").append('<div class="btn-wrapper"><button id="show-comments" class="btn btn-default">Pokaż więcej opinii</button></div>');
    
    var elemHeight = 0,
        elem1Height = $("#box_productcomments .innerbox .productcomment:nth-child(1)").height(),
        elem3Height = $("#box_productcomments .innerbox .productcomment:nth-child(3)").height();
    elemHeight = elem1Height + elem3Height; 
    $("#box_productcomments .innerbox").height(elemHeight);
    
    $("#box_productcomments").on("click", "#show-comments", function (ev) {
      ev.preventDefault();
      
      if ($("#box_productcomments").hasClass("visible")) {
        $("#box_productcomments").removeClass("visible")
        $("#box_productcomments .innerbox").css('height', elemHeight + 'px');
        $(this).text("Pokaż więcej opinii");
      } else {
        $("#box_productcomments").addClass("visible")
        $("#box_productcomments .innerbox").css('height', 'auto');
        $(this).text("Ukryj opnie")
      }
      
    })
  }
});

Shop.include({
  selectorFunctions: {
    boxslider: {
      selector: ".box.slider",
      load: function(slider, shopInstance) {
        slider.removeClass("loading");

        var _initialSlideWidth = 280,
          _slideWidth,
          _sliderWidth,
          _visibleSlides,
          _maxHeight = 0,
          _autoMove = false,
          _autoMoveDuration = Shop.useroptions.slider.automove;

        if (slider.hasClass("slider_automove")) {
          _autoMove = true;
        }

        var slides = slider.find(".product");

        if (slides.length > 1) {
          var sliderWrap = $('<div class="slider-wrap" />').css(
            "text-align",
            "left"
          );

          var nav = $("<div />").appendTo(slider);
          var prev = $('<span class="slider-nav-left" />')
            .css({
              display: "none"
            })
            .appendTo(nav);
          var next = $('<span class="slider-nav-right" />')
            .css({
              display: "block"
            })
            .appendTo(nav);

          slides.wrapAll(sliderWrap);
          sliderWrap = slider.find(".slider-wrap");

          shopInstance.addEvent(
            "img:change:slider:" + slider.attr("id"),
            function() {
              sliderWrap.css("height", "auto");

              slides.each(function() {
                if ($(this).outerHeight() >= _maxHeight) {
                  _maxHeight = $(this).outerHeight();
                  sliderWrap.height(_maxHeight + 6);
                }
              });
            }
          );

          $(window)
            .on("resize", function() {
              _sliderWidth = slider.outerWidth();
              _visibleSlides =
                Math.floor(_sliderWidth / _initialSlideWidth) || 1;
              _slideWidth =
                (_sliderWidth - 20 * (_visibleSlides - 1)) / _visibleSlides;

              slides.each(function() {
                if ($(this).outerHeight() >= _maxHeight) {
                  _maxHeight = $(this).outerHeight();
                }
              });

              slides.outerWidth(_slideWidth);
              sliderWrap
                .outerWidth((_slideWidth + 20) * slides.length + 3)
                .height(_maxHeight + 6);

              slides.css("left", "0");

              if (slides.length > _visibleSlides) {
                next.show();
                prev.hide();
              } else {
                next.hide();
                prev.hide();
              }
            })
            .trigger("resize");

          next.on("click", function(ev) {
            ev.stopPropagation();
            slides.animate(
              {
                left: "-=" + (_slideWidth + 20)
              },
              400,
              function() {
                var pos = parseInt($(this).css("left"));

                if (
                  (slides.length - _visibleSlides) * Math.floor(_slideWidth) <=
                  -pos
                ) {
                  next.hide();
                }

                if (-pos > 0) {
                  prev.show();
                }
              }
            );
          });

          prev.on("click", function(ev) {
            ev.stopPropagation();
            slides.animate(
              {
                left: "+=" + (_slideWidth + 20)
              },
              400,
              function() {
                var pos = parseInt($(this).css("left"));

                if (-pos <= 0) {
                  prev.hide();
                }

                if (
                  (slides.length - _visibleSlides) * Math.floor(_slideWidth) >=
                  -pos
                ) {
                  next.show();
                }
              }
            );
          });

          slider.on("swipeleft", function() {
            if (next.is(":visible")) {
              next.trigger("click");
            }
          });

          slider.on("swiperight", function() {
            if (prev.is(":visible")) {
              prev.trigger("click");
            }
          });

          if (_autoMove) {
            setInterval(function() {
              if (next.is(":visible")) {
                next.trigger("click");
              } else {
                slides.animate(
                  {
                    left: 0
                  },
                  600,
                  function() {
                    next.show();
                    prev.hide();
                  }
                );
              }
            }, _autoMoveDuration);
          }
        }
      }
    }
  }
});

// BLOG

$(document).ready(function(){
  
  const getArticle = async (handel) => {
    let content = await fetch(`https://sklep.biobabalscy.pl/${handel}`).then( res => { return res.text() }).then( data => { return data })
    return {
      title: $('#box_article .article-name', $(content)).text(),
      image_url: $('#box_article .article-image', $(content)).attr('src'),
      url: `https://sklep.biobabalscy.pl/${handel}`,
      date: $('#box_article  .article-date', $(content)).text(),
      categories: $('#box_article  .article-categories', $(content)).text(),
      author: $('#box_article  .article-author', $(content)).text()
    }
  }
  const getArticles = () => {
    articles = []
    const getFetch = async(handel) => {
      const article = await getArticle(handel)
      articles.push(article)
      console.log(article.title)
      $('#box_article').append(`
        <div class="article-bottom">
          <img src="${article.image_url}"/>
          <p>${article.title}</p>
          <a class="readmore" href="${article.url}">czytaj więcej</a>
        </div>
      `)
    }

    if( $('#box_article').children().end().text().indexOf('[article=') != -1){
      $.each($('#box_article .article-content div'), function(){
        if($(this).text().indexOf('[article=') != -1) {
          $(this).remove()
          let handel = $(this).text().slice(9,$(this).text().length-1);
          getFetch(handel)
        }
      })
    }
    return articles;
  }
  
  if($('#box_article').length > 0){
    getArticles();

    let sectionArticles = setInterval(function(){
      if ($('.article-bottom').length > 0){
        $('.article-bottom').wrapAll('<section class="articles-bottom"></section>')
      }
      if ($('.article-bottom_header').length > 0){
        $('.article-bottom_header').insertBefore('.articles-bottom');
      }
      clearInterval(sectionArticles)
    }, 1150)
    
  }

  let $listarticles = $('.shop_news_list #box_articlelist .innerbox article')

  if($listarticles.length > 0) {
    $.each($listarticles, function(){
      let $article = $(this)
      $('.article-image', $article).click(function(){
        window.location.pathname = $('.readmore', $article).attr('href')
      })
    })
  }

})

// END BLOG

// BASKET
$(document).ready(function(){
  if($('.shop_basket_address').length > 0){
    let $listlabel = $('.client-add-info .input_info p, .client-add-info .input_checkbox label')
    $.each($listlabel, function(){
      let $label = $(this)
      if ( $('.more', $label).length > 0 ) {
        $label.after($('.more', $label))
        $label.addClass('container-for-more')
        $( document ).on('click', '.more', function(){
          let $container = $('.container-for-more', $(this).closest('td'))
          console.log(1)
          $container.addClass('no-ellipsis')
        })
      }else $label.addClass('no-ellipsis')
    })
    $('.newsletter').insertBefore('.additional-fields:last');
    $('.newsletter .input label').addClass('container-for-more');
    $('.newsletter .input').append('<span class="more">Czytaj więcej</span>');
  }
})
// #END BASKET