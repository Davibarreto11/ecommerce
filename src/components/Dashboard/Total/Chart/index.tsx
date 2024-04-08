export default function Chart() {
  return (
    <div>
      <div id="chartOne" className="-ml-5">
        <div
          id="apexchartslm2lydhu"
          className="apexcharts-canvas apexchartslm2lydhu apexcharts-theme-light"
          style={{ width: 834, height: 335 }}
        >
          {/* <svg
            id="SvgjsSvg2075"
            width="834"
            height="335"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            xmlns:svgjs="http://svgjs.dev"
            className="apexcharts-svg apexcharts-zoomable"
            xmlns:data="ApexChartsNS"
            transform="translate(0, 0)"
            style={{background: 'transparent'}}
          >
            <g
              id="SvgjsG2077"
              className="apexcharts-inner apexcharts-graphical"
              transform="translate(46.186981201171875, 30)"
            >
              <defs id="SvgjsDefs2076">
                <clipPath id="gridRectMasklm2lydhu">
                  <rect
                    id="SvgjsRect2083"
                    width="771.6723937988281"
                    height="267.73"
                    x="-3"
                    y="-1"
                    rx="0"
                    ry="0"
                    opacity="1"
                    stroke-width="0"
                    stroke="none"
                    stroke-dasharray="0"
                    fill="#fff"
                  ></rect>
                </clipPath>
                <clipPath id="forecastMasklm2lydhu"></clipPath>
                <clipPath id="nonForecastMasklm2lydhu"></clipPath>
                <clipPath id="gridRectMarkerMasklm2lydhu">
                  <rect
                    id="SvgjsRect2084"
                    width="809.6723937988281"
                    height="309.73"
                    x="-22"
                    y="-22"
                    rx="0"
                    ry="0"
                    opacity="1"
                    stroke-width="0"
                    stroke="none"
                    stroke-dasharray="0"
                    fill="#fff"
                  ></rect>
                </clipPath>
                <linearGradient
                  id="SvgjsLinearGradient2112"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    id="SvgjsStop2113"
                    stop-opacity="0.65"
                    stop-color="rgba(60,80,224,0.65)"
                    offset="0"
                  ></stop>
                  <stop
                    id="SvgjsStop2114"
                    stop-opacity="0.5"
                    stop-color="rgba(158,168,240,0.5)"
                    offset="1"
                  ></stop>
                  <stop
                    id="SvgjsStop2115"
                    stop-opacity="0.5"
                    stop-color="rgba(158,168,240,0.5)"
                    offset="1"
                  ></stop>
                </linearGradient>
                <filter
                  id="SvgjsFilter2117"
                  filterUnits="userSpaceOnUse"
                  width="200%"
                  height="200%"
                  x="-50%"
                  y="-50%"
                >
                  <feFlood
                    id="SvgjsFeFlood2118"
                    flood-color="#623CEA14"
                    flood-opacity="0.1"
                    result="SvgjsFeFlood2118Out"
                    in="SourceGraphic"
                  ></feFlood>
                  <feComposite
                    id="SvgjsFeComposite2119"
                    in="SvgjsFeFlood2118Out"
                    in2="SourceAlpha"
                    operator="in"
                    result="SvgjsFeComposite2119Out"
                  ></feComposite>
                  <feOffset
                    id="SvgjsFeOffset2120"
                    dx="0"
                    dy="10"
                    result="SvgjsFeOffset2120Out"
                    in="SvgjsFeComposite2119Out"
                  ></feOffset>
                  <feGaussianBlur
                    id="SvgjsFeGaussianBlur2121"
                    stdDeviation="4 "
                    result="SvgjsFeGaussianBlur2121Out"
                    in="SvgjsFeOffset2120Out"
                  ></feGaussianBlur>
                  <feMerge
                    id="SvgjsFeMerge2122"
                    result="SvgjsFeMerge2122Out"
                    in="SourceGraphic"
                  >
                    <feMergeNode
                      id="SvgjsFeMergeNode2123"
                      in="SvgjsFeGaussianBlur2121Out"
                    ></feMergeNode>
                    <feMergeNode
                      id="SvgjsFeMergeNode2124"
                      in="[object Arguments]"
                    ></feMergeNode>
                  </feMerge>
                  <feBlend
                    id="SvgjsFeBlend2125"
                    in="SourceGraphic"
                    in2="SvgjsFeMerge2122Out"
                    mode="normal"
                    result="SvgjsFeBlend2125Out"
                  ></feBlend>
                </filter>
                <filter
                  id="SvgjsFilter2127"
                  filterUnits="userSpaceOnUse"
                  width="200%"
                  height="200%"
                  x="-50%"
                  y="-50%"
                >
                  <feFlood
                    id="SvgjsFeFlood2128"
                    flood-color="#623CEA14"
                    flood-opacity="0.1"
                    result="SvgjsFeFlood2128Out"
                    in="SourceGraphic"
                  ></feFlood>
                  <feComposite
                    id="SvgjsFeComposite2129"
                    in="SvgjsFeFlood2128Out"
                    in2="SourceAlpha"
                    operator="in"
                    result="SvgjsFeComposite2129Out"
                  ></feComposite>
                  <feOffset
                    id="SvgjsFeOffset2130"
                    dx="0"
                    dy="10"
                    result="SvgjsFeOffset2130Out"
                    in="SvgjsFeComposite2129Out"
                  ></feOffset>
                  <feGaussianBlur
                    id="SvgjsFeGaussianBlur2131"
                    stdDeviation="4 "
                    result="SvgjsFeGaussianBlur2131Out"
                    in="SvgjsFeOffset2130Out"
                  ></feGaussianBlur>
                  <feMerge
                    id="SvgjsFeMerge2132"
                    result="SvgjsFeMerge2132Out"
                    in="SourceGraphic"
                  >
                    <feMergeNode
                      id="SvgjsFeMergeNode2133"
                      in="SvgjsFeGaussianBlur2131Out"
                    ></feMergeNode>
                    <feMergeNode
                      id="SvgjsFeMergeNode2134"
                      in="[object Arguments]"
                    ></feMergeNode>
                  </feMerge>
                  <feBlend
                    id="SvgjsFeBlend2135"
                    in="SourceGraphic"
                    in2="SvgjsFeMerge2132Out"
                    mode="normal"
                    result="SvgjsFeBlend2135Out"
                  ></feBlend>
                </filter>
                <linearGradient
                  id="SvgjsLinearGradient2162"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    id="SvgjsStop2163"
                    stop-opacity="0.65"
                    stop-color="rgba(128,202,238,0.65)"
                    offset="0"
                  ></stop>
                  <stop
                    id="SvgjsStop2164"
                    stop-opacity="0.5"
                    stop-color="rgba(192,229,247,0.5)"
                    offset="1"
                  ></stop>
                  <stop
                    id="SvgjsStop2165"
                    stop-opacity="0.5"
                    stop-color="rgba(192,229,247,0.5)"
                    offset="1"
                  ></stop>
                </linearGradient>
                <filter
                  id="SvgjsFilter2167"
                  filterUnits="userSpaceOnUse"
                  width="200%"
                  height="200%"
                  x="-50%"
                  y="-50%"
                >
                  <feFlood
                    id="SvgjsFeFlood2168"
                    flood-color="#623CEA14"
                    flood-opacity="0.1"
                    result="SvgjsFeFlood2168Out"
                    in="SourceGraphic"
                  ></feFlood>
                  <feComposite
                    id="SvgjsFeComposite2169"
                    in="SvgjsFeFlood2168Out"
                    in2="SourceAlpha"
                    operator="in"
                    result="SvgjsFeComposite2169Out"
                  ></feComposite>
                  <feOffset
                    id="SvgjsFeOffset2170"
                    dx="0"
                    dy="10"
                    result="SvgjsFeOffset2170Out"
                    in="SvgjsFeComposite2169Out"
                  ></feOffset>
                  <feGaussianBlur
                    id="SvgjsFeGaussianBlur2171"
                    stdDeviation="4 "
                    result="SvgjsFeGaussianBlur2171Out"
                    in="SvgjsFeOffset2170Out"
                  ></feGaussianBlur>
                  <feMerge
                    id="SvgjsFeMerge2172"
                    result="SvgjsFeMerge2172Out"
                    in="SourceGraphic"
                  >
                    <feMergeNode
                      id="SvgjsFeMergeNode2173"
                      in="SvgjsFeGaussianBlur2171Out"
                    ></feMergeNode>
                    <feMergeNode
                      id="SvgjsFeMergeNode2174"
                      in="[object Arguments]"
                    ></feMergeNode>
                  </feMerge>
                  <feBlend
                    id="SvgjsFeBlend2175"
                    in="SourceGraphic"
                    in2="SvgjsFeMerge2172Out"
                    mode="normal"
                    result="SvgjsFeBlend2175Out"
                  ></feBlend>
                </filter>
                <filter
                  id="SvgjsFilter2177"
                  filterUnits="userSpaceOnUse"
                  width="200%"
                  height="200%"
                  x="-50%"
                  y="-50%"
                >
                  <feFlood
                    id="SvgjsFeFlood2178"
                    flood-color="#623CEA14"
                    flood-opacity="0.1"
                    result="SvgjsFeFlood2178Out"
                    in="SourceGraphic"
                  ></feFlood>
                  <feComposite
                    id="SvgjsFeComposite2179"
                    in="SvgjsFeFlood2178Out"
                    in2="SourceAlpha"
                    operator="in"
                    result="SvgjsFeComposite2179Out"
                  ></feComposite>
                  <feOffset
                    id="SvgjsFeOffset2180"
                    dx="0"
                    dy="10"
                    result="SvgjsFeOffset2180Out"
                    in="SvgjsFeComposite2179Out"
                  ></feOffset>
                  <feGaussianBlur
                    id="SvgjsFeGaussianBlur2181"
                    stdDeviation="4 "
                    result="SvgjsFeGaussianBlur2181Out"
                    in="SvgjsFeOffset2180Out"
                  ></feGaussianBlur>
                  <feMerge
                    id="SvgjsFeMerge2182"
                    result="SvgjsFeMerge2182Out"
                    in="SourceGraphic"
                  >
                    <feMergeNode
                      id="SvgjsFeMergeNode2183"
                      in="SvgjsFeGaussianBlur2181Out"
                    ></feMergeNode>
                    <feMergeNode
                      id="SvgjsFeMergeNode2184"
                      in="[object Arguments]"
                    ></feMergeNode>
                  </feMerge>
                  <feBlend
                    id="SvgjsFeBlend2185"
                    in="SourceGraphic"
                    in2="SvgjsFeMerge2182Out"
                    mode="normal"
                    result="SvgjsFeBlend2185Out"
                  ></feBlend>
                </filter>
              </defs>
              <line
                id="SvgjsLine2082"
                x1="0"
                y1="0"
                x2="0"
                y2="265.73"
                stroke="#b6b6b6"
                stroke-dasharray="3"
                stroke-linecap="butt"
                className="apexcharts-xcrosshairs"
                x="0"
                y="0"
                width="1"
                height="265.73"
                fill="#b1b9c4"
                filter="none"
                fill-opacity="0.9"
                stroke-width="1"
              ></line>
              <g
                id="SvgjsG2203"
                className="apexcharts-xaxis"
                transform="translate(0, 0)"
              >
                <g
                  id="SvgjsG2204"
                  className="apexcharts-xaxis-texts-g"
                  transform="translate(0, -4)"
                >
                  <text
                    id="SvgjsText2206"
                    font-family="Satoshi, sans-serif"
                    x="0"
                    y="294.73"
                    text-anchor="middle"
                    dominant-baseline="auto"
                    font-size="12px"
                    font-weight="400"
                    fill="#373d3f"
                    className="apexcharts-text apexcharts-xaxis-label "
                    style={{ fontFamily: "Satoshi, sans-serif" }}
                  >
                    <tspan id="SvgjsTspan2207">Sep</tspan>
                    <title>Sep</title>
                  </text>
                  <text
                    id="SvgjsText2209"
                    font-family="Satoshi, sans-serif"
                    x="69.60658125443891"
                    y="294.73"
                    text-anchor="middle"
                    dominant-baseline="auto"
                    font-size="12px"
                    font-weight="400"
                    fill="#373d3f"
                    className="apexcharts-text apexcharts-xaxis-label "
                    style={{ fontFamily: "Satoshi, sans-serif" }}
                  >
                    <tspan id="SvgjsTspan2210">Oct</tspan>
                    <title>Oct</title>
                  </text>
                  <text
                    id="SvgjsText2212"
                    font-family="Satoshi, sans-serif"
                    x="139.21316250887784"
                    y="294.73"
                    text-anchor="middle"
                    dominant-baseline="auto"
                    font-size="12px"
                    font-weight="400"
                    fill="#373d3f"
                    className="apexcharts-text apexcharts-xaxis-label "
                    style={{ fontFamily: "Satoshi, sans-serif" }}
                  >
                    <tspan id="SvgjsTspan2213">Nov</tspan>
                    <title>Nov</title>
                  </text>
                  <text
                    id="SvgjsText2215"
                    font-family="Satoshi, sans-serif"
                    x="208.81974376331678"
                    y="294.73"
                    text-anchor="middle"
                    dominant-baseline="auto"
                    font-size="12px"
                    font-weight="400"
                    fill="#373d3f"
                    className="apexcharts-text apexcharts-xaxis-label "
                    style={{ fontFamily: "Satoshi, sans-serif" }}
                  >
                    <tspan id="SvgjsTspan2216">Dec</tspan>
                    <title>Dec</title>
                  </text>
                  <text
                    id="SvgjsText2218"
                    font-family="Satoshi, sans-serif"
                    x="278.42632501775574"
                    y="294.73"
                    text-anchor="middle"
                    dominant-baseline="auto"
                    font-size="12px"
                    font-weight="400"
                    fill="#373d3f"
                    className="apexcharts-text apexcharts-xaxis-label "
                    style={{ fontFamily: "Satoshi, sans-serif" }}
                  >
                    <tspan id="SvgjsTspan2219">Jan</tspan>
                    <title>Jan</title>
                  </text>
                  <text
                    id="SvgjsText2221"
                    font-family="Satoshi, sans-serif"
                    x="348.0329062721947"
                    y="294.73"
                    text-anchor="middle"
                    dominant-baseline="auto"
                    font-size="12px"
                    font-weight="400"
                    fill="#373d3f"
                    className="apexcharts-text apexcharts-xaxis-label "
                    style={{ fontFamily: "Satoshi, sans-serif" }}
                  >
                    <tspan id="SvgjsTspan2222">Feb</tspan>
                    <title>Feb</title>
                  </text>
                  <text
                    id="SvgjsText2224"
                    font-family="Satoshi, sans-serif"
                    x="417.6394875266336"
                    y="294.73"
                    text-anchor="middle"
                    dominant-baseline="auto"
                    font-size="12px"
                    font-weight="400"
                    fill="#373d3f"
                    className="apexcharts-text apexcharts-xaxis-label "
                    style={{ fontFamily: "Satoshi, sans-serif" }}
                  >
                    <tspan id="SvgjsTspan2225">Mar</tspan>
                    <title>Mar</title>
                  </text>
                  <text
                    id="SvgjsText2227"
                    font-family="Satoshi, sans-serif"
                    x="487.2460687810725"
                    y="294.73"
                    text-anchor="middle"
                    dominant-baseline="auto"
                    font-size="12px"
                    font-weight="400"
                    fill="#373d3f"
                    className="apexcharts-text apexcharts-xaxis-label "
                    style={{ fontFamily: "Satoshi, sans-serif" }}
                  >
                    <tspan id="SvgjsTspan2228">Apr</tspan>
                    <title>Apr</title>
                  </text>
                  <text
                    id="SvgjsText2230"
                    font-family="Satoshi, sans-serif"
                    x="556.8526500355114"
                    y="294.73"
                    text-anchor="middle"
                    dominant-baseline="auto"
                    font-size="12px"
                    font-weight="400"
                    fill="#373d3f"
                    className="apexcharts-text apexcharts-xaxis-label "
                    style={{ fontFamily: "Satoshi, sans-serif" }}
                  >
                    <tspan id="SvgjsTspan2231">May</tspan>
                    <title>May</title>
                  </text>
                  <text
                    id="SvgjsText2233"
                    font-family="Satoshi, sans-serif"
                    x="626.4592312899503"
                    y="294.73"
                    text-anchor="middle"
                    dominant-baseline="auto"
                    font-size="12px"
                    font-weight="400"
                    fill="#373d3f"
                    className="apexcharts-text apexcharts-xaxis-label "
                    style={{ fontFamily: "Satoshi, sans-serif" }}
                  >
                    <tspan id="SvgjsTspan2234">Jun</tspan>
                    <title>Jun</title>
                  </text>
                  <text
                    id="SvgjsText2236"
                    font-family="Satoshi, sans-serif"
                    x="696.0658125443891"
                    y="294.73"
                    text-anchor="middle"
                    dominant-baseline="auto"
                    font-size="12px"
                    font-weight="400"
                    fill="#373d3f"
                    className="apexcharts-text apexcharts-xaxis-label "
                    style={{ fontFamily: "Satoshi, sans-serif" }}
                  >
                    <tspan id="SvgjsTspan2237">Jul</tspan>
                    <title>Jul</title>
                  </text>
                  <text
                    id="SvgjsText2239"
                    font-family="Satoshi, sans-serif"
                    x="765.672393798828"
                    y="294.73"
                    text-anchor="middle"
                    dominant-baseline="auto"
                    font-size="12px"
                    font-weight="400"
                    fill="#373d3f"
                    className="apexcharts-text apexcharts-xaxis-label "
                    style={{ fontFamily: "Satoshi, sans-serif" }}
                  >
                    <tspan id="SvgjsTspan2240">Aug</tspan>
                    <title>Aug</title>
                  </text>
                </g>
              </g>
              <g id="SvgjsG2186" className="apexcharts-grid">
                <g
                  id="SvgjsG2187"
                  className="apexcharts-gridlines-horizontal"
                >
                  <line
                    id="SvgjsLine2191"
                    x1="0"
                    y1="26.573"
                    x2="765.6723937988281"
                    y2="26.573"
                    stroke="#e0e0e0"
                    stroke-dasharray="0"
                    stroke-linecap="butt"
                    className="apexcharts-gridline"
                  ></line>
                  <line
                    id="SvgjsLine2192"
                    x1="0"
                    y1="53.146"
                    x2="765.6723937988281"
                    y2="53.146"
                    stroke="#e0e0e0"
                    stroke-dasharray="0"
                    stroke-linecap="butt"
                    className="apexcharts-gridline"
                  ></line>
                  <line
                    id="SvgjsLine2193"
                    x1="0"
                    y1="79.719"
                    x2="765.6723937988281"
                    y2="79.719"
                    stroke="#e0e0e0"
                    stroke-dasharray="0"
                    stroke-linecap="butt"
                    className="apexcharts-gridline"
                  ></line>
                  <line
                    id="SvgjsLine2194"
                    x1="0"
                    y1="106.292"
                    x2="765.6723937988281"
                    y2="106.292"
                    stroke="#e0e0e0"
                    stroke-dasharray="0"
                    stroke-linecap="butt"
                    className="apexcharts-gridline"
                  ></line>
                  <line
                    id="SvgjsLine2195"
                    x1="0"
                    y1="132.865"
                    x2="765.6723937988281"
                    y2="132.865"
                    stroke="#e0e0e0"
                    stroke-dasharray="0"
                    stroke-linecap="butt"
                    className="apexcharts-gridline"
                  ></line>
                  <line
                    id="SvgjsLine2196"
                    x1="0"
                    y1="159.43800000000002"
                    x2="765.6723937988281"
                    y2="159.43800000000002"
                    stroke="#e0e0e0"
                    stroke-dasharray="0"
                    stroke-linecap="butt"
                    className="apexcharts-gridline"
                  ></line>
                  <line
                    id="SvgjsLine2197"
                    x1="0"
                    y1="186.01100000000002"
                    x2="765.6723937988281"
                    y2="186.01100000000002"
                    stroke="#e0e0e0"
                    stroke-dasharray="0"
                    stroke-linecap="butt"
                    className="apexcharts-gridline"
                  ></line>
                  <line
                    id="SvgjsLine2198"
                    x1="0"
                    y1="212.58400000000003"
                    x2="765.6723937988281"
                    y2="212.58400000000003"
                    stroke="#e0e0e0"
                    stroke-dasharray="0"
                    stroke-linecap="butt"
                    className="apexcharts-gridline"
                  ></line>
                  <line
                    id="SvgjsLine2199"
                    x1="0"
                    y1="239.15700000000004"
                    x2="765.6723937988281"
                    y2="239.15700000000004"
                    stroke="#e0e0e0"
                    stroke-dasharray="0"
                    stroke-linecap="butt"
                    className="apexcharts-gridline"
                  ></line>
                </g>
                <g
                  id="SvgjsG2188"
                  className="apexcharts-gridlines-vertical"
                ></g>
                <line
                  id="SvgjsLine2202"
                  x1="0"
                  y1="265.73"
                  x2="765.6723937988281"
                  y2="265.73"
                  stroke="transparent"
                  stroke-dasharray="0"
                  stroke-linecap="butt"
                ></line>
                <line
                  id="SvgjsLine2201"
                  x1="0"
                  y1="1"
                  x2="0"
                  y2="265.73"
                  stroke="transparent"
                  stroke-dasharray="0"
                  stroke-linecap="butt"
                ></line>
              </g>
              <g
                id="SvgjsG2085"
                className="apexcharts-area-series apexcharts-plot-series"
              >
                <g
                  id="SvgjsG2086"
                  className="apexcharts-series"
                  seriesName="ProductxOne"
                  data:longestSeries="true"
                  rel="1"
                  data:realIndex="0"
                >
                  <path
                    id="SvgjsPath2116"
                    d="M 0 265.73 L 0 204.6121 L 69.60658125443892 236.49970000000002 L 139.21316250887784 207.26940000000002 L 208.81974376331678 193.98290000000003 L 278.4263250177557 231.1851 L 348.0329062721946 207.26940000000002 L 417.63948752663356 167.4099 L 487.24606878107244 209.9267 L 556.8526500355114 148.80880000000002 L 626.4592312899503 207.26940000000002 L 696.0658125443892 186.01100000000002 L 765.6723937988281 146.1515 L 765.6723937988281 265.73M 765.6723937988281 146.1515z"
                    fill="url(#SvgjsLinearGradient2112)"
                    fill-opacity="1"
                    stroke-opacity="1"
                    stroke-linecap="butt"
                    stroke-width="0"
                    stroke-dasharray="0"
                    className="apexcharts-area"
                    tabIndex={0}
                    clip-path="url(#gridRectMasklm2lydhu)"
                    filter="url(#SvgjsFilter2117)"
                    pathTo="M 0 265.73 L 0 204.6121 L 69.60658125443892 236.49970000000002 L 139.21316250887784 207.26940000000002 L 208.81974376331678 193.98290000000003 L 278.4263250177557 231.1851 L 348.0329062721946 207.26940000000002 L 417.63948752663356 167.4099 L 487.24606878107244 209.9267 L 556.8526500355114 148.80880000000002 L 626.4592312899503 207.26940000000002 L 696.0658125443892 186.01100000000002 L 765.6723937988281 146.1515 L 765.6723937988281 265.73M 765.6723937988281 146.1515z"
                    pathFrom="M -1 265.73 L -1 265.73 L 69.60658125443892 265.73 L 139.21316250887784 265.73 L 208.81974376331678 265.73 L 278.4263250177557 265.73 L 348.0329062721946 265.73 L 417.63948752663356 265.73 L 487.24606878107244 265.73 L 556.8526500355114 265.73 L 626.4592312899503 265.73 L 696.0658125443892 265.73 L 765.6723937988281 265.73"
                  ></path>
                  <path
                    id="SvgjsPath2126"
                    d="M 0 204.6121 L 69.60658125443892 236.49970000000002 L 139.21316250887784 207.26940000000002 L 208.81974376331678 193.98290000000003 L 278.4263250177557 231.1851 L 348.0329062721946 207.26940000000002 L 417.63948752663356 167.4099 L 487.24606878107244 209.9267 L 556.8526500355114 148.80880000000002 L 626.4592312899503 207.26940000000002 L 696.0658125443892 186.01100000000002 L 765.6723937988281 146.1515"
                    fill="none"
                    fill-opacity="1"
                    stroke="#3c50e0"
                    stroke-opacity="1"
                    stroke-linecap="butt"
                    stroke-width="2"
                    stroke-dasharray="0"
                    className="apexcharts-area"
                    tabIndex={0}
                    clip-path="url(#gridRectMasklm2lydhu)"
                    filter="url(#SvgjsFilter2127)"
                    pathTo="M 0 204.6121 L 69.60658125443892 236.49970000000002 L 139.21316250887784 207.26940000000002 L 208.81974376331678 193.98290000000003 L 278.4263250177557 231.1851 L 348.0329062721946 207.26940000000002 L 417.63948752663356 167.4099 L 487.24606878107244 209.9267 L 556.8526500355114 148.80880000000002 L 626.4592312899503 207.26940000000002 L 696.0658125443892 186.01100000000002 L 765.6723937988281 146.1515"
                    pathFrom="M -1 265.73 L -1 265.73 L 69.60658125443892 265.73 L 139.21316250887784 265.73 L 208.81974376331678 265.73 L 278.4263250177557 265.73 L 348.0329062721946 265.73 L 417.63948752663356 265.73 L 487.24606878107244 265.73 L 556.8526500355114 265.73 L 626.4592312899503 265.73 L 696.0658125443892 265.73 L 765.6723937988281 265.73"
                    fill-rule="evenodd"
                  ></path>
                  <g
                    id="SvgjsG2087"
                    className="apexcharts-series-markers-wrap"
                    data:realIndex="0"
                  >
                    <g
                      id="SvgjsG2089"
                      className="apexcharts-series-markers"
                      clip-path="url(#gridRectMarkerMasklm2lydhu)"
                    >
                      <circle
                        id="SvgjsCircle2090"
                        r="4"
                        cx="0"
                        cy="204.6121"
                        className="apexcharts-marker no-pointer-events wuy9vks9f"
                        stroke="#3056d3"
                        fill="#ffffff"
                        fill-opacity="1"
                        stroke-width="3"
                        stroke-opacity="0.9"
                        rel="0"
                        j="0"
                        index="0"
                        default-marker-size="4"
                      ></circle>
                      <circle
                        id="SvgjsCircle2091"
                        r="4"
                        cx="69.60658125443892"
                        cy="236.49970000000002"
                        className="apexcharts-marker no-pointer-events wfpshk60x"
                        stroke="#3056d3"
                        fill="#ffffff"
                        fill-opacity="1"
                        stroke-width="3"
                        stroke-opacity="0.9"
                        rel="1"
                        j="1"
                        index="0"
                        default-marker-size="4"
                      ></circle>
                    </g>
                    <g
                      id="SvgjsG2092"
                      className="apexcharts-series-markers"
                      clip-path="url(#gridRectMarkerMasklm2lydhu)"
                    >
                      <circle
                        id="SvgjsCircle2093"
                        r="4"
                        cx="139.21316250887784"
                        cy="207.26940000000002"
                        className="apexcharts-marker no-pointer-events webz4x7yn"
                        stroke="#3056d3"
                        fill="#ffffff"
                        fill-opacity="1"
                        stroke-width="3"
                        stroke-opacity="0.9"
                        rel="2"
                        j="2"
                        index="0"
                        default-marker-size="4"
                      ></circle>
                    </g>
                    <g
                      id="SvgjsG2094"
                      className="apexcharts-series-markers"
                      clip-path="url(#gridRectMarkerMasklm2lydhu)"
                    >
                      <circle
                        id="SvgjsCircle2095"
                        r="4"
                        cx="208.81974376331678"
                        cy="193.98290000000003"
                        className="apexcharts-marker no-pointer-events wces48oik"
                        stroke="#3056d3"
                        fill="#ffffff"
                        fill-opacity="1"
                        stroke-width="3"
                        stroke-opacity="0.9"
                        rel="3"
                        j="3"
                        index="0"
                        default-marker-size="4"
                      ></circle>
                    </g>
                    <g
                      id="SvgjsG2096"
                      className="apexcharts-series-markers"
                      clip-path="url(#gridRectMarkerMasklm2lydhu)"
                    >
                      <circle
                        id="SvgjsCircle2097"
                        r="4"
                        cx="278.4263250177557"
                        cy="231.1851"
                        className="apexcharts-marker no-pointer-events wnulwzwwm"
                        stroke="#3056d3"
                        fill="#ffffff"
                        fill-opacity="1"
                        stroke-width="3"
                        stroke-opacity="0.9"
                        rel="4"
                        j="4"
                        index="0"
                        default-marker-size="4"
                      ></circle>
                    </g>
                    <g
                      id="SvgjsG2098"
                      className="apexcharts-series-markers"
                      clip-path="url(#gridRectMarkerMasklm2lydhu)"
                    >
                      <circle
                        id="SvgjsCircle2099"
                        r="4"
                        cx="348.0329062721946"
                        cy="207.26940000000002"
                        className="apexcharts-marker no-pointer-events wnl1422bj"
                        stroke="#3056d3"
                        fill="#ffffff"
                        fill-opacity="1"
                        stroke-width="3"
                        stroke-opacity="0.9"
                        rel="5"
                        j="5"
                        index="0"
                        default-marker-size="4"
                      ></circle>
                    </g>
                    <g
                      id="SvgjsG2100"
                      className="apexcharts-series-markers"
                      clip-path="url(#gridRectMarkerMasklm2lydhu)"
                    >
                      <circle
                        id="SvgjsCircle2101"
                        r="4"
                        cx="417.63948752663356"
                        cy="167.4099"
                        className="apexcharts-marker no-pointer-events whkolp7pl"
                        stroke="#3056d3"
                        fill="#ffffff"
                        fill-opacity="1"
                        stroke-width="3"
                        stroke-opacity="0.9"
                        rel="6"
                        j="6"
                        index="0"
                        default-marker-size="4"
                      ></circle>
                    </g>
                    <g
                      id="SvgjsG2102"
                      className="apexcharts-series-markers"
                      clip-path="url(#gridRectMarkerMasklm2lydhu)"
                    >
                      <circle
                        id="SvgjsCircle2103"
                        r="4"
                        cx="487.24606878107244"
                        cy="209.9267"
                        className="apexcharts-marker no-pointer-events wyimkqk8v"
                        stroke="#3056d3"
                        fill="#ffffff"
                        fill-opacity="1"
                        stroke-width="3"
                        stroke-opacity="0.9"
                        rel="7"
                        j="7"
                        index="0"
                        default-marker-size="4"
                      ></circle>
                    </g>
                    <g
                      id="SvgjsG2104"
                      className="apexcharts-series-markers"
                      clip-path="url(#gridRectMarkerMasklm2lydhu)"
                    >
                      <circle
                        id="SvgjsCircle2105"
                        r="4"
                        cx="556.8526500355114"
                        cy="148.80880000000002"
                        class="apexcharts-marker no-pointer-events wcnnvispj"
                        stroke="#3056d3"
                        fill="#ffffff"
                        fill-opacity="1"
                        stroke-width="3"
                        stroke-opacity="0.9"
                        rel="8"
                        j="8"
                        index="0"
                        default-marker-size="4"
                      ></circle>
                    </g>
                    <g
                      id="SvgjsG2106"
                      className="apexcharts-series-markers"
                      clip-path="url(#gridRectMarkerMasklm2lydhu)"
                    >
                      <circle
                        id="SvgjsCircle2107"
                        r="4"
                        cx="626.4592312899503"
                        cy="207.26940000000002"
                        className="apexcharts-marker no-pointer-events w5je4fd8i"
                        stroke="#3056d3"
                        fill="#ffffff"
                        fill-opacity="1"
                        stroke-width="3"
                        stroke-opacity="0.9"
                        rel="9"
                        j="9"
                        index="0"
                        default-marker-size="4"
                      ></circle>
                    </g>
                    <g
                      id="SvgjsG2108"
                      className="apexcharts-series-markers"
                      clip-path="url(#gridRectMarkerMasklm2lydhu)"
                    >
                      <circle
                        id="SvgjsCircle2109"
                        r="4"
                        cx="696.0658125443892"
                        cy="186.01100000000002"
                        className="apexcharts-marker no-pointer-events wb0ypatrjh"
                        stroke="#3056d3"
                        fill="#ffffff"
                        fill-opacity="1"
                        stroke-width="3"
                        stroke-opacity="0.9"
                        rel="10"
                        j="10"
                        index="0"
                        default-marker-size="4"
                      ></circle>
                    </g>
                    <g
                      id="SvgjsG2110"
                      className="apexcharts-series-markers"
                      clip-path="url(#gridRectMarkerMasklm2lydhu)"
                    >
                      <circle
                        id="SvgjsCircle2111"
                        r="4"
                        cx="765.6723937988281"
                        cy="146.1515"
                        className="apexcharts-marker no-pointer-events woyn5j88yf"
                        stroke="#3056d3"
                        fill="#ffffff"
                        fill-opacity="1"
                        stroke-width="3"
                        stroke-opacity="0.9"
                        rel="11"
                        j="11"
                        index="0"
                        default-marker-size="4"
                      ></circle>
                    </g>
                  </g>
                </g>
                <g
                  id="SvgjsG2136"
                  className="apexcharts-series"
                  seriesName="ProductxTwo"
                  data:longestSeries="true"
                  rel="2"
                  data:realIndex="1"
                >
                  <path
                    id="SvgjsPath2166"
                    d="M 0 265.73 L 0 186.01100000000002 L 69.60658125443892 199.2975 L 139.21316250887784 170.0672 L 208.81974376331678 186.01100000000002 L 278.4263250177557 146.1515 L 348.0329062721946 172.7245 L 417.63948752663356 95.6628 L 487.24606878107244 127.5504 L 556.8526500355114 108.9493 L 626.4592312899503 170.0672 L 696.0658125443892 162.0953 L 765.6723937988281 130.2077 L 765.6723937988281 265.73M 765.6723937988281 130.2077z"
                    fill="url(#SvgjsLinearGradient2162)"
                    fill-opacity="1"
                    stroke-opacity="1"
                    stroke-linecap="butt"
                    stroke-width="0"
                    stroke-dasharray="0"
                    className="apexcharts-area"
                    index="1"
                    clip-path="url(#gridRectMasklm2lydhu)"
                    filter="url(#SvgjsFilter2167)"
                    pathTo="M 0 265.73 L 0 186.01100000000002 L 69.60658125443892 199.2975 L 139.21316250887784 170.0672 L 208.81974376331678 186.01100000000002 L 278.4263250177557 146.1515 L 348.0329062721946 172.7245 L 417.63948752663356 95.6628 L 487.24606878107244 127.5504 L 556.8526500355114 108.9493 L 626.4592312899503 170.0672 L 696.0658125443892 162.0953 L 765.6723937988281 130.2077 L 765.6723937988281 265.73M 765.6723937988281 130.2077z"
                    pathFrom="M -1 265.73 L -1 265.73 L 69.60658125443892 265.73 L 139.21316250887784 265.73 L 208.81974376331678 265.73 L 278.4263250177557 265.73 L 348.0329062721946 265.73 L 417.63948752663356 265.73 L 487.24606878107244 265.73 L 556.8526500355114 265.73 L 626.4592312899503 265.73 L 696.0658125443892 265.73 L 765.6723937988281 265.73"
                  ></path>
                  <path
                    id="SvgjsPath2176"
                    d="M 0 186.01100000000002 L 69.60658125443892 199.2975 L 139.21316250887784 170.0672 L 208.81974376331678 186.01100000000002 L 278.4263250177557 146.1515 L 348.0329062721946 172.7245 L 417.63948752663356 95.6628 L 487.24606878107244 127.5504 L 556.8526500355114 108.9493 L 626.4592312899503 170.0672 L 696.0658125443892 162.0953 L 765.6723937988281 130.2077"
                    fill="none"
                    fill-opacity="1"
                    stroke="#80caee"
                    stroke-opacity="1"
                    stroke-linecap="butt"
                    stroke-width="2"
                    stroke-dasharray="0"
                    className="apexcharts-area"
                    index="1"
                    clip-path="url(#gridRectMasklm2lydhu)"
                    filter="url(#SvgjsFilter2177)"
                    pathTo="M 0 186.01100000000002 L 69.60658125443892 199.2975 L 139.21316250887784 170.0672 L 208.81974376331678 186.01100000000002 L 278.4263250177557 146.1515 L 348.0329062721946 172.7245 L 417.63948752663356 95.6628 L 487.24606878107244 127.5504 L 556.8526500355114 108.9493 L 626.4592312899503 170.0672 L 696.0658125443892 162.0953 L 765.6723937988281 130.2077"
                    pathFrom="M -1 265.73 L -1 265.73 L 69.60658125443892 265.73 L 139.21316250887784 265.73 L 208.81974376331678 265.73 L 278.4263250177557 265.73 L 348.0329062721946 265.73 L 417.63948752663356 265.73 L 487.24606878107244 265.73 L 556.8526500355114 265.73 L 626.4592312899503 265.73 L 696.0658125443892 265.73 L 765.6723937988281 265.73"
                    fill-rule="evenodd"
                  ></path>
                  <g
                    id="SvgjsG2137"
                    className="apexcharts-series-markers-wrap"
                    data:realIndex="1"
                  >
                    <g
                      id="SvgjsG2139"
                      className="apexcharts-series-markers"
                      clip-path="url(#gridRectMarkerMasklm2lydhu)"
                    >
                      <circle
                        id="SvgjsCircle2140"
                        r="4"
                        cx="0"
                        cy="186.01100000000002"
                        className="apexcharts-marker no-pointer-events wpd7ima25"
                        stroke="#80caee"
                        fill="#ffffff"
                        fill-opacity="1"
                        stroke-width="3"
                        stroke-opacity="0.9"
                        rel="0"
                        j="0"
                        index="1"
                        default-marker-size="4"
                      ></circle>
                      <circle
                        id="SvgjsCircle2141"
                        r="4"
                        cx="69.60658125443892"
                        cy="199.2975"
                        className="apexcharts-marker no-pointer-events wsm67njv6"
                        stroke="#80caee"
                        fill="#ffffff"
                        fill-opacity="1"
                        stroke-width="3"
                        stroke-opacity="0.9"
                        rel="1"
                        j="1"
                        index="1"
                        default-marker-size="4"
                      ></circle>
                    </g>
                    <g
                      id="SvgjsG2142"
                      className="apexcharts-series-markers"
                      clip-path="url(#gridRectMarkerMasklm2lydhu)"
                    >
                      <circle
                        id="SvgjsCircle2143"
                        r="4"
                        cx="139.21316250887784"
                        cy="170.0672"
                        className="apexcharts-marker no-pointer-events wvhwrwinx"
                        stroke="#80caee"
                        fill="#ffffff"
                        fill-opacity="1"
                        stroke-width="3"
                        stroke-opacity="0.9"
                        rel="2"
                        j="2"
                        index="1"
                        default-marker-size="4"
                      ></circle>
                    </g>
                    <g
                      id="SvgjsG2144"
                      className="apexcharts-series-markers"
                      clip-path="url(#gridRectMarkerMasklm2lydhu)"
                    >
                      <circle
                        id="SvgjsCircle2145"
                        r="4"
                        cx="208.81974376331678"
                        cy="186.01100000000002"
                        className="apexcharts-marker no-pointer-events w92873lb6l"
                        stroke="#80caee"
                        fill="#ffffff"
                        fill-opacity="1"
                        stroke-width="3"
                        stroke-opacity="0.9"
                        rel="3"
                        j="3"
                        index="1"
                        default-marker-size="4"
                      ></circle>
                    </g>
                    <g
                      id="SvgjsG2146"
                      className="apexcharts-series-markers"
                      clip-path="url(#gridRectMarkerMasklm2lydhu)"
                    >
                      <circle
                        id="SvgjsCircle2147"
                        r="4"
                        cx="278.4263250177557"
                        cy="146.1515"
                        className="apexcharts-marker no-pointer-events wdccjqvbi"
                        stroke="#80caee"
                        fill="#ffffff"
                        fill-opacity="1"
                        stroke-width="3"
                        stroke-opacity="0.9"
                        rel="4"
                        j="4"
                        index="1"
                        default-marker-size="4"
                      ></circle>
                    </g>
                    <g
                      id="SvgjsG2148"
                      className="apexcharts-series-markers"
                      clip-path="url(#gridRectMarkerMasklm2lydhu)"
                    >
                      <circle
                        id="SvgjsCircle2149"
                        r="4"
                        cx="348.0329062721946"
                        cy="172.7245"
                        className="apexcharts-marker no-pointer-events wbr8u8w7e"
                        stroke="#80caee"
                        fill="#ffffff"
                        fill-opacity="1"
                        stroke-width="3"
                        stroke-opacity="0.9"
                        rel="5"
                        j="5"
                        index="1"
                        default-marker-size="4"
                      ></circle>
                    </g>
                    <g
                      id="SvgjsG2150"
                      className="apexcharts-series-markers"
                      clip-path="url(#gridRectMarkerMasklm2lydhu)"
                    >
                      <circle
                        id="SvgjsCircle2151"
                        r="4"
                        cx="417.63948752663356"
                        cy="95.6628"
                        className="apexcharts-marker no-pointer-events w0er90ddo"
                        stroke="#80caee"
                        fill="#ffffff"
                        fill-opacity="1"
                        stroke-width="3"
                        stroke-opacity="0.9"
                        rel="6"
                        j="6"
                        index="1"
                        default-marker-size="4"
                      ></circle>
                    </g>
                    <g
                      id="SvgjsG2152"
                      className="apexcharts-series-markers"
                      clip-path="url(#gridRectMarkerMasklm2lydhu)"
                    >
                      <circle
                        id="SvgjsCircle2153"
                        r="4"
                        cx="487.24606878107244"
                        cy="127.5504"
                        className="apexcharts-marker no-pointer-events w8ivcc5dc"
                        stroke="#80caee"
                        fill="#ffffff"
                        fill-opacity="1"
                        stroke-width="3"
                        stroke-opacity="0.9"
                        rel="7"
                        j="7"
                        index="1"
                        default-marker-size="4"
                      ></circle>
                    </g>
                    <g
                      id="SvgjsG2154"
                      className="apexcharts-series-markers"
                      clip-path="url(#gridRectMarkerMasklm2lydhu)"
                    >
                      <circle
                        id="SvgjsCircle2155"
                        r="4"
                        cx="556.8526500355114"
                        cy="108.9493"
                        className="apexcharts-marker no-pointer-events wbemiyc2i"
                        stroke="#80caee"
                        fill="#ffffff"
                        fill-opacity="1"
                        stroke-width="3"
                        stroke-opacity="0.9"
                        rel="8"
                        j="8"
                        index="1"
                        default-marker-size="4"
                      ></circle>
                    </g>
                    <g
                      id="SvgjsG2156"
                      className="apexcharts-series-markers"
                      clip-path="url(#gridRectMarkerMasklm2lydhu)"
                    >
                      <circle
                        id="SvgjsCircle2157"
                        r="4"
                        cx="626.4592312899503"
                        cy="170.0672"
                        className="apexcharts-marker no-pointer-events wrjd7xx55"
                        stroke="#80caee"
                        fill="#ffffff"
                        fill-opacity="1"
                        stroke-width="3"
                        stroke-opacity="0.9"
                        rel="9"
                        j="9"
                        index="1"
                        default-marker-size="4"
                      ></circle>
                    </g>
                    <g
                      id="SvgjsG2158"
                      className="apexcharts-series-markers"
                      clip-path="url(#gridRectMarkerMasklm2lydhu)"
                    >
                      <circle
                        id="SvgjsCircle2159"
                        r="4"
                        cx="696.0658125443892"
                        cy="162.0953"
                        className="apexcharts-marker no-pointer-events w6op276zg"
                        stroke="#80caee"
                        fill="#ffffff"
                        fill-opacity="1"
                        stroke-width="3"
                        stroke-opacity="0.9"
                        rel="10"
                        j="10"
                        index="1"
                        default-marker-size="4"
                      ></circle>
                    </g>
                    <g
                      id="SvgjsG2160"
                      className="apexcharts-series-markers"
                      clip-path="url(#gridRectMarkerMasklm2lydhu)"
                    >
                      <circle
                        id="SvgjsCircle2161"
                        r="4"
                        cx="765.6723937988281"
                        cy="130.2077"
                        className="apexcharts-marker no-pointer-events w1yg33ddx"
                        stroke="#80caee"
                        fill="#ffffff"
                        fill-opacity="1"
                        stroke-width="3"
                        stroke-opacity="0.9"
                        rel="11"
                        j="11"
                        index="1"
                        default-marker-size="4"
                      ></circle>
                    </g>
                  </g>
                </g>
                <g
                  id="SvgjsG2088"
                  className="apexcharts-datalabels"
                  data:realIndex="0"
                ></g>
                <g
                  id="SvgjsG2138"
                  className="apexcharts-datalabels"
                  data:realIndex="1"
                ></g>
              </g>
              <g id="SvgjsG2189" className="apexcharts-grid-borders">
                <line
                  id="SvgjsLine2190"
                  x1="0"
                  y1="0"
                  x2="765.6723937988281"
                  y2="0"
                  stroke="#e0e0e0"
                  stroke-dasharray="0"
                  stroke-linecap="butt"
                  className="apexcharts-gridline"
                ></line>
                <line
                  id="SvgjsLine2200"
                  x1="0"
                  y1="265.73"
                  x2="765.6723937988281"
                  y2="265.73"
                  stroke="#e0e0e0"
                  stroke-dasharray="0"
                  stroke-linecap="butt"
                  className="apexcharts-gridline"
                ></line>
              </g>
              <line
                id="SvgjsLine2276"
                x1="0"
                y1="0"
                x2="765.6723937988281"
                y2="0"
                stroke="#b6b6b6"
                stroke-dasharray="0"
                stroke-width="1"
                stroke-linecap="butt"
                className="apexcharts-ycrosshairs"
              ></line>
              <line
                id="SvgjsLine2277"
                x1="0"
                y1="0"
                x2="765.6723937988281"
                y2="0"
                stroke-dasharray="0"
                stroke-width="0"
                stroke-linecap="butt"
                className="apexcharts-ycrosshairs-hidden"
              ></line>
              <g
                id="SvgjsG2278"
                className="apexcharts-yaxis-annotations"
              ></g>
              <g
                id="SvgjsG2279"
                className="apexcharts-xaxis-annotations"
              ></g>
              <g
                id="SvgjsG2280"
                className="apexcharts-point-annotations"
              ></g>
              <rect
                id="SvgjsRect2281"
                width="0"
                height="0"
                x="0"
                y="0"
                rx="0"
                ry="0"
                opacity="1"
                stroke-width="0"
                stroke="none"
                stroke-dasharray="0"
                fill="#fefefe"
                className="apexcharts-zoom-rect"
              ></rect>
              <rect
                id="SvgjsRect2282"
                width="0"
                height="0"
                x="0"
                y="0"
                rx="0"
                ry="0"
                opacity="1"
                stroke-width="0"
                stroke="none"
                stroke-dasharray="0"
                fill="#fefefe"
                className="apexcharts-selection-rect"
              ></rect>
            </g>
            <rect
              id="SvgjsRect2081"
              width="0"
              height="0"
              x="0"
              y="0"
              rx="0"
              ry="0"
              opacity="1"
              stroke-width="0"
              stroke="none"
              stroke-dasharray="0"
              fill="#fefefe"
            ></rect>
            <g
              id="SvgjsG2241"
              className="apexcharts-yaxis"
              rel="0"
              transform="translate(16.186981201171875, 0)"
            >
              <g id="SvgjsG2242" className="apexcharts-yaxis-texts-g">
                <text
                  id="SvgjsText2244"
                  font-family="Satoshi, sans-serif"
                  x="20"
                  y="32"
                  text-anchor="end"
                  dominant-baseline="auto"
                  font-size="11px"
                  font-weight="400"
                  fill="#373d3f"
                  className="apexcharts-text apexcharts-yaxis-label "
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                  <tspan id="SvgjsTspan2245">100</tspan>
                  <title>100</title>
                </text>
                <text
                  id="SvgjsText2247"
                  font-family="Satoshi, sans-serif"
                  x="20"
                  y="58.573"
                  text-anchor="end"
                  dominant-baseline="auto"
                  font-size="11px"
                  font-weight="400"
                  fill="#373d3f"
                  className="apexcharts-text apexcharts-yaxis-label "
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                  <tspan id="SvgjsTspan2248">90</tspan>
                  <title>90</title>
                </text>
                <text
                  id="SvgjsText2250"
                  font-family="Satoshi, sans-serif"
                  x="20"
                  y="85.146"
                  text-anchor="end"
                  dominant-baseline="auto"
                  font-size="11px"
                  font-weight="400"
                  fill="#373d3f"
                  className="apexcharts-text apexcharts-yaxis-label "
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                  <tspan id="SvgjsTspan2251">80</tspan>
                  <title>80</title>
                </text>
                <text
                  id="SvgjsText2253"
                  font-family="Satoshi, sans-serif"
                  x="20"
                  y="111.719"
                  text-anchor="end"
                  dominant-baseline="auto"
                  font-size="11px"
                  font-weight="400"
                  fill="#373d3f"
                  className="apexcharts-text apexcharts-yaxis-label "
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                  <tspan id="SvgjsTspan2254">70</tspan>
                  <title>70</title>
                </text>
                <text
                  id="SvgjsText2256"
                  font-family="Satoshi, sans-serif"
                  x="20"
                  y="138.292"
                  text-anchor="end"
                  dominant-baseline="auto"
                  font-size="11px"
                  font-weight="400"
                  fill="#373d3f"
                  className="apexcharts-text apexcharts-yaxis-label "
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                  <tspan id="SvgjsTspan2257">60</tspan>
                  <title>60</title>
                </text>
                <text
                  id="SvgjsText2259"
                  font-family="Satoshi, sans-serif"
                  x="20"
                  y="164.865"
                  text-anchor="end"
                  dominant-baseline="auto"
                  font-size="11px"
                  font-weight="400"
                  fill="#373d3f"
                  className="apexcharts-text apexcharts-yaxis-label "
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                  <tspan id="SvgjsTspan2260">50</tspan>
                  <title>50</title>
                </text>
                <text
                  id="SvgjsText2262"
                  font-family="Satoshi, sans-serif"
                  x="20"
                  y="191.43800000000002"
                  text-anchor="end"
                  dominant-baseline="auto"
                  font-size="11px"
                  font-weight="400"
                  fill="#373d3f"
                  className="apexcharts-text apexcharts-yaxis-label "
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                  <tspan id="SvgjsTspan2263">40</tspan>
                  <title>40</title>
                </text>
                <text
                  id="SvgjsText2265"
                  font-family="Satoshi, sans-serif"
                  x="20"
                  y="218.01100000000002"
                  text-anchor="end"
                  dominant-baseline="auto"
                  font-size="11px"
                  font-weight="400"
                  fill="#373d3f"
                  className="apexcharts-text apexcharts-yaxis-label "
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                  <tspan id="SvgjsTspan2266">30</tspan>
                  <title>30</title>
                </text>
                <text
                  id="SvgjsText2268"
                  font-family="Satoshi, sans-serif"
                  x="20"
                  y="244.58400000000003"
                  text-anchor="end"
                  dominant-baseline="auto"
                  font-size="11px"
                  font-weight="400"
                  fill="#373d3f"
                  className="apexcharts-text apexcharts-yaxis-label "
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                  <tspan id="SvgjsTspan2269">20</tspan>
                  <title>20</title>
                </text>
                <text
                  id="SvgjsText2271"
                  font-family="Satoshi, sans-serif"
                  x="20"
                  y="271.15700000000004"
                  text-anchor="end"
                  dominant-baseline="auto"
                  font-size="11px"
                  font-weight="400"
                  fill="#373d3f"
                  className="apexcharts-text apexcharts-yaxis-label "
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                  <tspan id="SvgjsTspan2272">10</tspan>
                  <title>10</title>
                </text>
                <text
                  id="SvgjsText2274"
                  font-family="Satoshi, sans-serif"
                  x="20"
                  y="297.73"
                  text-anchor="end"
                  dominant-baseline="auto"
                  font-size="11px"
                  font-weight="400"
                  fill="#373d3f"
                  className="apexcharts-text apexcharts-yaxis-label "
                  style={{ fontFamily: "Satoshi, sans-serif" }}
                >
                  <tspan id="SvgjsTspan2275">0</tspan>
                  <title>0</title>
                </text>
              </g>
            </g>
            <g id="SvgjsG2078" className="apexcharts-annotations"></g>
          </svg> */}
          <div className="apexcharts-legend" style={{ maxHeight: 167.5 }}></div>
          <div className="apexcharts-tooltip apexcharts-theme-light">
            <div
              className="apexcharts-tooltip-title"
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontSize: 12,
              }}
            ></div>
            <div
              className="apexcharts-tooltip-series-group"
              style={{ order: 1 }}
            >
              <span
                className="apexcharts-tooltip-marker"
                style={{ backgroundColor: "rgb(60, 80, 224)" }}
              ></span>
              <div
                className="apexcharts-tooltip-text"
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontSize: 12,
                }}
              >
                <div className="apexcharts-tooltip-y-group">
                  <span className="apexcharts-tooltip-text-y-label"></span>
                  <span className="apexcharts-tooltip-text-y-value"></span>
                </div>
                <div className="apexcharts-tooltip-goals-group">
                  <span className="apexcharts-tooltip-text-goals-label"></span>
                  <span className="apexcharts-tooltip-text-goals-value"></span>
                </div>
                <div className="apexcharts-tooltip-z-group">
                  <span className="apexcharts-tooltip-text-z-label"></span>
                  <span className="apexcharts-tooltip-text-z-value"></span>
                </div>
              </div>
            </div>
            <div
              className="apexcharts-tooltip-series-group"
              style={{ order: 2 }}
            >
              <span
                className="apexcharts-tooltip-marker"
                style={{ backgroundColor: "rgb(128, 202, 238)" }}
              ></span>
              <div
                className="apexcharts-tooltip-text"
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  fontSize: 12,
                }}
              >
                <div className="apexcharts-tooltip-y-group">
                  <span className="apexcharts-tooltip-text-y-label"></span>
                  <span className="apexcharts-tooltip-text-y-value"></span>
                </div>
                <div className="apexcharts-tooltip-goals-group">
                  <span className="apexcharts-tooltip-text-goals-label"></span>
                  <span className="apexcharts-tooltip-text-goals-value"></span>
                </div>
                <div className="apexcharts-tooltip-z-group">
                  <span className="apexcharts-tooltip-text-z-label"></span>
                  <span className="apexcharts-tooltip-text-z-value"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light">
            <div
              className="apexcharts-xaxistooltip-text"
              style={{
                fontFamily: " Satoshi, sans-serif",
                fontSize: 12,
              }}
            ></div>
          </div>
          <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
            <div className="apexcharts-yaxistooltip-text"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
