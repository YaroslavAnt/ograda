export const BASE_URL = "https://back.ograda.zp.ua/";
export const CDN_URL = "back.ograda.zp.ua/";

export const DOMAIN = "https://ograda.zp.ua";

export const THUMBOR_PROXY = "http://185.233.118.96:8888/unsafe";

export const PHONE = "+38(099)548 60 10";
export const PHONE1 = "+38(098)030 50 10";
export const EMAIL = "info@ograda.zp.ua";
export const LOCATION = "г.Запорожье, пос.Леваневского, ул.Стартовая 1ж";
export const FACEBOOK =
  "https://www.facebook.com/%D0%9E%D0%B3%D1%80%D0%B0%D0%B4%D0%B0-103254474643177/";
export const INSTAGRAM = "https://www.instagram.com/ograda_zp/";
export const TWITTER = "https://twitter.com/OgradaZ?s=09";
export const YOUTUBE =
  "https://www.youtube.com/channel/UC-hAZEqOv5yPYMQK26--PDQ";
export const PINTEREST = "https://www.pinterest.com/ograda_zp0599/";
export const SOCIAL_SHARE = [
  { network: "facebook", name: "Facebook", color: "#4267b2" },
  { network: "twitter", name: "Twitter", color: "rgb(29, 161, 242)" },
  { network: "vk", name: "ВКонтакте", color: "#4c75a3" },
  { network: "odnoklassniki", name: "Одноклассники", color: "#ee8208" },
  { network: "viber", name: "Viber", color: "#8e24aa" },
  { network: "telegram", name: "Telegram", color: "#039be5" }
];
export const BACKLINKS_SCRIPTS = {
  kraken: `
    <!-- Top100 (Kraken) Counter -->
    <script>
        (function (w, d, c) {
        (w[c] = w[c] || []).push(function() {
            var options = {
                project: 7290284,
            };
            try {
                w.top100Counter = new top100(options);
            } catch(e) { }
        });
        var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src =
        (d.location.protocol == "https:" ? "https:" : "http:") +
        "//st.top100.ru/top100/top100.js";
    
        if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
    })(window, document, "_top100q");
    </script>
    <noscript>
      <img src="//counter.rambler.ru/top100.cnt?pid=7290284" alt="Топ-100" />
    </noscript>
    <!-- END Top100 (Kraken) Counter -->`,
  hit_ua: `
    <!-- hit.ua -->
    <a href='http://hit.ua/?x=35632' target='_blank'>
    <script language="javascript" type="text/javascript"><!--
    Cd=document;Cr="&"+Math.random();Cp="&s=1";
    Cd.cookie="b=b";if(Cd.cookie)Cp+="&c=1";
    Cp+="&t="+(new Date()).getTimezoneOffset();
    if(self!=top)Cp+="&f=1";
    //--></script>
    <script language="javascript1.1" type="text/javascript"><!--
    if(navigator.javaEnabled())Cp+="&j=1";
    //--></script>
    <script language="javascript1.2" type="text/javascript"><!--
    if(typeof(screen)!='undefined')Cp+="&w="+screen.width+"&h="+
    screen.height+"&d="+(screen.colorDepth?screen.colorDepth:screen.pixelDepth);
    //--></script>
    <script language="javascript" type="text/javascript"><!--
    Cd.write("<img src='//c.hit.ua/hit?i=35632&g=0&x=2"+Cp+Cr+
    "&r="+escape(Cd.referrer)+"&u="+escape(window.location.href)+
    "' border='0' wi"+"dth='1' he"+"ight='1'/>");
    //--></script>
    <noscript>
    <img src='//c.hit.ua/hit?i=35632&amp;g=0&amp;x=2' border='0'/>
    </noscript></a>
    <!-- / hit.ua -->`,
  hotlog: `
    <!-- HotLog -->
    <span id="hotlog_counter"></span>
    <span id="hotlog_dyn"></span>
    <script type="text/javascript"> var hot_s = document.createElement('script');
    hot_s.type = 'text/javascript'; hot_s.async = true;
    hot_s.src = 'http://js.hotlog.ru/dcounter/2593079.js';
    hot_d = document.getElementById('hotlog_dyn');
    hot_d.appendChild(hot_s);
    </script>
    <noscript>
    <a href="http://click.hotlog.ru/?2593079" target="_blank">
    <img src="http://hit5.hotlog.ru/cgi-bin/hotlog/count?s=2593079&im=43" border="0"
    title="HotLog" alt="HotLog"></a>
    </noscript>
    <!-- /HotLog -->`
};
