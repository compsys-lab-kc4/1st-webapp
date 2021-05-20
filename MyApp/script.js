$("#query").change(function() {
  var pref = $("#query").val();
  if(pref == "栃木県") {
    $("#button1").on("click", function() {
      $("#shop_name_1").val('カトレアガーデン宇都宮南');
      $("#shop_url_1").attr("href", "https://www.fukudaya.net/");
      $("#shop_name_2").val('インターパーク宇都宮南');
      $("#shop_url_2").attr("href", "https://www.fukudaya.net/");
      $("#shop_name_3").val('ベルモール');
      $("#shop_url_3").attr("href", "https://www.bellmall.co.jp/");
      $("#shop_name_4").val('おやまゆうえんハーヴェストウォーク');
      $("#shop_url_4").attr("href", "http://harvestwalk.com/");
      $("#shop_name_5").val('あしかがハーヴェストプレース');
      $("#shop_url_5").attr("href", "http://harvestwalk.com/");
      $("#shop_name_6").val('コムファーストショッピングセンター');
      $("#shop_url_6").attr("href", "http://www.com1st.co.jp/");
      $("#shop_name_7").val('カインズモール大平');
      $("#shop_url_7").attr("href", "https://map.cainz.com/map/766");
      $("#shop_name_8").val('イオンモール小山');
      $("#shop_url_8").attr("href", "https://www.aeon.jp/sc/oyama/");
      $("#shop_name_9").val('宇都宮Festa');
      $("#shop_url_9").attr("href", "http://u-festa.com/");
      $("#shop_name_10").val('ヨークタウン栃木祝町');
      $("#shop_url_10").attr("href", "https://yorkbenimaru.com/store/details/tochigiiwaicho/");
      $("#shop_name_11").val('イオンモール佐野新都市');
      $("#shop_url_11").attr("href", "https://www.aeon.jp/sc/sanoshintoshi/");
      $("#shop_name_12").val('FKDショッピングモール宇都宮インターパーク店');
      $("#shop_url_12").attr("href", "https://www.fukudaya.net/");
      $("#shop_name_13").val('福田屋ショッピングプラザ宇都宮店');
      $("#shop_url_13").attr("href", "https://www.fukudaya.net/");
    });
  } else if(pref == "東京都") {
    $("#button1").on("click", function() {
      $("#shop_name_1").val('109');
      $("#shop_name_2").val('MINANO');
      $("#shop_name_3").val('あきる野ショッピングシティ');
      $("#shop_name_4").val('くるる');
      $("#shop_name_5").val('ららぽーと立川立飛');
      $("#shop_name_6").val('イオンモールむさし村山');
      $("#shop_name_7").val('イオンモール多摩平の森');
      $("#shop_name_8").val('イオンモール日の出');
      $("#shop_name_9").val('イオンモール東久留米');
      $("#shop_name_10").val('イオン昭島ショッピングセンター');
      $("#shop_name_11").val('イトーヨーカドー府中店');
      $("#shop_name_12").val('ザ・モールみずほ16');
      $("#shop_name_13").val('セレオ国分寺');
      $("#shop_name_14").val('ダイエー東大和店');
      $("#shop_name_15").val('ダイエー立川店');
      $("#shop_name_16").val('トリエ京王調布');
      $("#shop_name_17").val('フォーリス');
      $("#shop_name_18").val('モディ');
      $("#shop_name_19").val('モリタウン');
      $("#shop_name_20").val('京王吉祥寺駅ビル');
      $("#shop_name_21").val('京王府中ショッピングセンター');
      $("#shop_name_22").val('京王百貨店');
      $("#shop_name_23").val('京王高幡ショッピングセンター');
      $("#shop_name_24").val('武蔵府中ル・シーニュ');
      $("#shop_name_25").val('河辺タウンビル');
      $("#shop_name_26").val('第一デパート');
      $("#shop_name_27").val('若葉ケヤキモール');
      $("#shop_name_28").val('グランベリーパーク');
      $("#shop_name_29").val('グランベリーモール');
      $("#shop_name_30").val('コピス吉祥寺');
      $("#shop_name_31").val('ティーズ原宿');
    });
  } else if(pref == "千葉県") {
    $("#button1").on("click", function() {
      
    });
  } else if(pref == "群馬県") {
    $("#button1").on("click", function() {
      
    });
  } else if(pref == "茨城県") {
    $("#button1").on("click", function() {
      
    });
  } else if(pref == "神奈川県") {
    $("#button1").on("click", function() {
      
    });
  } else if(pref == "埼玉県") {
    $("#button1").on("click", function() {
      
    });
  }
}); 
