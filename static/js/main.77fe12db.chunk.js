(this.webpackJsonpweatherspotter=this.webpackJsonpweatherspotter||[]).push([[0],{24:function(e,t,a){},25:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var i=a(0),c=a(2),n=a.n(c),s=a(18),r=a.n(s),o=(a(24),a(3)),d=a(4),l=a(6),h=a(5),p=(a(25),a(8)),j=a.n(p),m=(a(43),function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.currentWeather,t=e.tempF,a=e.tempC,c=e.feelF,n=e.feelC,s=e.windDir,r=e.windSpdM,o=e.windSpdK,d=e.desc,l=e.icon,h=e.precipI,p=e.precipM,j=this.props.imperial,m=this.props.locationData,u=m.city,f=m.state;return Object(i.jsxs)("div",{className:"currentWeather",children:[Object(i.jsx)("div",{className:"selectedLocation",children:Object(i.jsxs)("h2",{children:[u,", ",f]})}),Object(i.jsxs)("div",{className:"temp",children:[Object(i.jsxs)("h2",{children:[j&&Math.round(t),!j&&Math.round(a),"\xb0",j&&"F",!j&&"C"]}),Object(i.jsxs)("div",{className:"realfeel",children:["Feels like: ",j&&Math.round(c),!j&&Math.round(n),"\xb0"]})]}),Object(i.jsxs)("div",{className:"desc_container",children:[Object(i.jsx)("div",{className:"iconFrame",children:Object(i.jsx)("img",{src:l,alt:"weather icon"})}),Object(i.jsx)("div",{className:"description",children:d})]}),Object(i.jsxs)("div",{className:"current_group",children:[Object(i.jsxs)("div",{className:"precip",children:["Precipitation:",Object(i.jsxs)("div",{className:"total",children:[j&&h+" in",!j&&p+" mm"]})]}),Object(i.jsxs)("div",{className:"windSpd",children:["Wind Speed:",Object(i.jsxs)("div",{children:[j&&r+" mph",!j&&o+" kph"]})]}),Object(i.jsxs)("div",{className:"windDir",children:["Wind Direction:",Object(i.jsx)("div",{children:s})]})]})]})}}]),a}(c.Component)),u=(a(44),a(9)),f=a.n(u),b=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props.forecast[0],t=this.props.forecast[1],a=this.props.forecast[2],c=this.props.imperial;return Object(i.jsxs)("div",{className:"forecastContainer",children:[Object(i.jsx)("div",{className:"forecastday",children:Object(i.jsxs)("div",{children:[Object(i.jsx)("h3",{children:"Today"}),Object(i.jsxs)("div",{className:"description",children:[Object(i.jsx)("img",{src:e.icon,alt:"weather icon"}),e.desc]}),Object(i.jsxs)("div",{className:"forecastTemp",children:[Object(i.jsxs)("p",{children:["High: ",c&&Math.round(e.highF),!c&&Math.round(e.highC)]}),Object(i.jsxs)("p",{children:["Low: ",c&&Math.round(e.lowF),!c&&Math.round(e.lowC)]})]}),Object(i.jsxs)("div",{className:"precip",children:[Object(i.jsxs)("p",{children:["Chance of Rain: ",e.rain,"%"]}),Object(i.jsxs)("p",{children:["Chance of Snow: ",e.snow,"%"]}),Object(i.jsxs)("p",{children:["Expected Precipitation: ",c&&e.totalPrecip_in+"in",!c&&e.totalPrecip_mm+"mm"]})]}),Object(i.jsxs)("div",{className:"wind",children:["Wind: ",c&&e.windSpdM+"mph",!c&&e.windSpdK+"kph"]})]})}),Object(i.jsxs)("div",{className:"forecastday",children:[Object(i.jsxs)("h3",{children:[" ",f()(t.date).format("MM/DD/YYYY")]}),Object(i.jsxs)("div",{className:"description",children:[Object(i.jsx)("img",{src:t.icon,alt:"weather icon"}),e.desc]}),Object(i.jsxs)("div",{className:"forecastTemp",children:[Object(i.jsxs)("p",{children:["High: ",c&&Math.round(t.highF),!c&&Math.round(t.highC)]}),Object(i.jsxs)("p",{children:["Low: ",c&&Math.round(t.lowF),!c&&Math.round(t.lowC)]})]}),Object(i.jsxs)("div",{className:"precip",children:[Object(i.jsxs)("p",{children:["Chance of Rain: ",t.rain,"%"]}),Object(i.jsxs)("p",{children:["Chance of Snow: ",t.snow,"%"]}),Object(i.jsxs)("p",{children:["Expected Precipitation: ",c&&t.totalPrecip_in+"in",!c&&t.totalPrecip_mm+"mm"]})]}),Object(i.jsxs)("div",{className:"wind",children:["Wind: ",c&&t.windSpdM+"mph",!c&&t.windSpdK+"kph"]})]}),Object(i.jsxs)("div",{className:"forecastday",children:[Object(i.jsx)("h3",{children:f()(a.date).format("MM/DD/YYYY")}),Object(i.jsxs)("div",{className:"description",children:[Object(i.jsx)("img",{src:a.icon,alt:"weather icon"}),a.desc]}),Object(i.jsxs)("div",{className:"forecastTemp",children:[Object(i.jsxs)("p",{children:["High: ",c&&Math.round(a.highF),!c&&Math.round(a.highC)]}),Object(i.jsxs)("p",{children:["Low: ",c&&Math.round(a.lowF),!c&&Math.round(a.lowC)]})]}),Object(i.jsxs)("div",{className:"precip",children:[Object(i.jsxs)("p",{children:["Chance of Rain: ",a.rain,"%"]}),Object(i.jsxs)("p",{children:["Chance of Snow: ",a.snow,"%"]}),Object(i.jsxs)("p",{children:["Expected Precipitation: ",c&&a.totalPrecip_in+"in",!c&&a.totalPrecip_mm+"mm"]})]}),Object(i.jsxs)("div",{className:"wind",children:["Wind: ",c&&a.windSpdM+"mph",!c&&a.windSpdK+"kph"]})]})]})}}]),a}(c.Component);a(46);function x(e){return Object(i.jsxs)("div",{className:"header",children:[Object(i.jsx)("h1",{className:"title",children:"WeatherSpotter"}),Object(i.jsxs)("form",{className:"location",onSubmit:function(t){e.updateWeather(t)},children:[Object(i.jsx)("label",{htmlFor:"location",children:"Search Location: "}),Object(i.jsx)("input",{className:"location_input",name:"location",placeholder:"City/Zip",onChange:function(t){return e.changeLocation(t.target.value)}}),Object(i.jsx)("input",{className:"submit",type:"submit"})]}),Object(i.jsx)("div",{className:"toggleContainer",children:Object(i.jsx)("button",{className:"toggleUnits",onClick:function(t){return e.handleClick(t)},children:"Imperial/Metric"})})]})}var O="8e24985cac8e4eea925204724200912",w=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(o.a)(this,a);for(var i=arguments.length,c=new Array(i),n=0;n<i;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={location:{latitude:44.9778,longitude:-93.265},locationData:{},currentWeather:{},forecast:[],imperial:!0,displayForecast:!1,inputData:""},e.handleClick=function(){var t=e.state.imperial;e.setState({imperial:!t}),e.forceUpdate()},e.handleChange=function(t){e.setState({inputData:t})},e.updateWeather=function(t){t.preventDefault(),e.state.inputData.length>=1?j.a.get("http://api.weatherapi.com/v1/forecast.json?key=".concat(O,"&q=").concat(e.state.inputData,"&days=3")).then((function(t){var a=t.data.location,i=t.data.current,c=[];t.data.forecast.forecastday.forEach((function(e){var t={highF:e.day.maxtemp_f,highC:e.day.maxtemp_c,lowF:e.day.mintemp_f,lowC:e.day.mintemp_c,snow:e.day.daily_chance_of_snow,rain:e.day.daily_chance_of_rain,totalPrecip_in:e.day.totalprecip_in,totalPrecip_mm:e.day.totalprecip_mm,desc:e.day.condition.text,icon:e.day.condition.icon,windSpdK:e.day.maxwind_kph,windSpdM:e.day.maxwind_mph,date:e.date};c.push(t)}));var n={tempF:i.temp_f,tempC:i.temp_c,feelF:i.feelslike_f,feelC:i.feelslike_c,windDir:i.wind_dir,windSpdM:i.wind_mph,windSpdK:i.wind_kph,desc:i.condition.text,icon:i.condition.icon,precipI:i.precip_in,precipM:i.precip_mm},s={city:a.name,state:a.region};e.setState({locationData:s,currentWeather:n,forecast:c,displayForecast:!0})})).catch((function(e){alert("*QUACK!* After much deliberation, we regret to inform you that the council of rubber duckies has determined the location you are looking for does not exist. Please try searching for a location currently in existence.")})):e.state.inputData.length<1&&alert("I am not a mind reader. Please enter the location you would like to search for.")},e}return Object(d.a)(a,[{key:"getData",value:function(){var e=this;j.a.get("http://api.weatherapi.com/v1/forecast.json?key=".concat(O,"&q=").concat(this.state.location.latitude,",").concat(this.state.location.longitude,"&days=3")).then((function(t){var a=t.data.location,i=t.data.current;t.data.forecast.forecastday.forEach((function(t){var a={highF:t.day.maxtemp_f,highC:t.day.maxtemp_c,lowF:t.day.mintemp_f,lowC:t.day.mintemp_c,snow:t.day.daily_chance_of_snow,rain:t.day.daily_chance_of_rain,totalPrecip_in:t.day.totalprecip_in,totalPrecip_mm:t.day.totalprecip_mm,desc:t.day.condition.text,icon:t.day.condition.icon,windSpdK:t.day.maxwind_kph,windSpdM:t.day.maxwind_mph,date:t.date};e.state.forecast.push(a)}));var c={tempF:i.temp_f,tempC:i.temp_c,feelF:i.feelslike_f,feelC:i.feelslike_c,windDir:i.wind_dir,windSpdM:i.wind_mph,windSpdK:i.wind_kph,desc:i.condition.text,icon:i.condition.icon,precipI:i.precip_in,precipM:i.precip_mm},n={city:a.name,state:a.region};e.setState({locationData:n,currentWeather:c,displayForecast:!0})}))}},{key:"componentDidMount",value:function(){var e=this;navigator.geolocation.getCurrentPosition((function(t){var a={latitude:t.coords.latitude,longitude:t.coords.longitude};e.setState({location:a}),e.getData()}),(function(t){t.code===t.PERMISSION_DENIED&&e.getData()}))}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(x,{changeLocation:this.handleChange,updateWeather:this.updateWeather,handleClick:this.handleClick,imperial:this.state.imperial}),Object(i.jsx)("h2",{className:"componentTitle",children:"Current Conditions"}),Object(i.jsx)(m,{locationData:this.state.locationData,currentWeather:this.state.currentWeather,imperial:this.state.imperial}),Object(i.jsx)("h2",{className:"componentTitle",children:"3-Day Forecast"}),this.state.displayForecast&&Object(i.jsx)(b,{forecast:this.state.forecast,imperial:this.state.imperial})]})}}]),a}(n.a.Component);r.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(w,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.77fe12db.chunk.js.map