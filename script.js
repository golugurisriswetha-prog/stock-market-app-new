//
=======================================
  //AI TRADING ANALYZER
  //
  ============================================
  //Create chart
  cons chart=
  LightWeightCharts.createChart(
    document.getElementByID("chart"),
    {
      layout:{
        background:{
          color:#0f1117"
        },
        textcolor:"#d1d4dc"
        },
        grid:{
          vertLines:{
            color:"#20242d"
            },
            horzlines:{
              color:"20242d"
              }
            },
            width:
            document.getElementById("Chart").clientWidth,
            height:500,
            timeScale:{
              timeVisible:true
              }
            }
            );
            //Create candlestick series
            const candlestickSeries=chart.addCandletickSeries({
              upcolor:"#26a69a",
              downcolor:"#ef5350",
              borderVisible:false,
              WickUpColor:"326a69a",
              WickDownColor:"#ef53350"
            });
            //Create market data
            const data=[
              {time:"2026-09-01",open:2800,high:2860,low:2770,close:2840},
              {time:"2026-09-02",open:2840,high:2900,low:2810,close:2880},
              {time":"2026=09-03",open:2880,high:2940,low:2850,close:2910},
              {time":"2026-09-04",open:2910,high:2950,low:2870,close:2890},
              {time":"2026-09-05",open:2890,high:2980,low:2880,close:2960},
              {time":"2026-09-08",open:2960,high:3010,low:2930,close:2990},
              {time":"2026-09-09",open:2990,high:3020,low:2950,close:2970},
              {time":"2026-09-10",open:2970,high:3000,low:2990,close:2930},
              {time":"2026-09-11,open:2930,high:2970,low:2890,close:2950},
              {time":"2026-09-15",open:3010,high:3060,low:2980,close:3040},
              {time":"2026-09-16",open:3040,high:3070,low:3000,close:3020},                     
               {time":"2026-09-12",open:2950,high:3040,low:2940,close:2950},
               {time":"2026-09-17",open:3020,high:3050,low:2960,close:2980},
              {time":"2026-09-18",open:2980,high:3010,low:2920,close:2940},
              {time":"2026-09-19",open:2940,high:2990,low:2910,close:2970},
               {time":"2026-09-22",open:2970,high:3030,low:2950,close:3010},
               {time":"2026-09-23",open:3010,high:3050,low:2990,close:3030},
              {time":"2026-09-24",open:3030,high:3070,low:3000,close:3050},
              {time":"2026-09-25",open:3050,high:3090,low:3010,close:3040},                                          
              {time":"2026-09-26",open:3040,high:3080,low:2990,close:3020}    
              ];
            //put data on chart
            candlestickSeries.setData(data);
            //Fit chart
            chart.timeScale().fitContent();
            //
            ========================================================================
            //SEARCH STOCK
            //
            ======================================================================================
            function serchStock(){
              const input=document.getElementById("stockInput")
              .value
              trim()
              .toUpperCase();
              if(input ===""){
                alert("Please enter a stock name.");
                return;
              }
              document.get.ElememtById("stockName")
              .innerText=input;
              document.getElementById("stockPrice").innerText=₹3,020.000";
                alert(
                  "Stock selected:"+
                  input  +
                  "\n\nReal market data API will be connected in the next version.");
            }
            //
            ================================================================================================
            //WATCHLIST
            //
            ====================================================================================================
            function loadStock(stock){
              document.get.ElementById("stockName")
              .innerText=stock;
              const prices={
                RELIANCE:₹2,950.00",
                TCS:₹4,100.00",
                INFY:₹1,520.00",
                BAJFINANCE:₹1,020.00"
              };
              document.getElementById("stockPrice").innerText=prices[stock] ||
                ₹3,020.00";
            }
            //
            ===========================================================================================================
            //TIMEFRAME
            //
            =============================================================================================================
            function changeTimeframe(timeframe)
            {
              alert(
                "Selected timeframe:"+
                timeframe+
                "\n\nDifferent timeframe data will be connected in the next version.");
            }
            //
            ===================================================================================================================
            //AI ANALYSIS
            //
            ================================================================================================================
            function aiAnalyzer(){
              const stock=document.get.ElementById("stockName")
              .innerText;
              const result=
                AI Analysis for ${stock}:
            Trend:
            the sample chart currently shows a mixed-to-positive movement.
              RSI:
              RSI is around 58,Which indicates moderate buying momentum.
                MACD:
              MACD is positive in this sample data.
                Risk:
              Market conditions can change quickly.
                AI  conclusion:
              This is an educational technical-analysis summary,
                not a guaranteed prediction ot investment recommendation;
              document.getElementById("aiResult").
                innerText=result;
            }
            //
            ==============================================================================================================
            //PAPER TRADING
            //
            ============================================================================================================
            let balance=100000;
            function paperBuy(){
              alert(
                "Paper BUY order placed!\n\n"+
                "Virtual balance :₹"+balance.toLocaleString()
                );
            }
            function paperSell(){
              alert(
                "Paper SELL order plaaced!\n\n"+
                "Virtual balance:₹"+
                balance.toLocaleString()
                );
            }
            //
            ============================================================================================
            //RESPONSIVE CHART
            //
            ====================================================================================================
            window.addEventListener("resize",()=>{
              chart.applyOptions({
                width:
                  document.getElementById("chart").clientWidth
              });
            });
