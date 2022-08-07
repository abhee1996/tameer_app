import * as React from "react";
import Svg, {
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
  G,
  Circle,
  Path,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg width={144.612} height={129.017} {...props}>
      <Defs>
        <LinearGradient
          id="prefix__h"
          y1={0.5}
          x2={1}
          y2={0.5}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#3c2106" />
          <Stop offset={0.045} stopColor="#422408" />
          <Stop offset={0.264} stopColor="#5b3211" />
          <Stop offset={0.492} stopColor="#6d3c18" />
          <Stop offset={0.731} stopColor="#78431c" />
          <Stop offset={1} stopColor="#7c451e" />
        </LinearGradient>
        <LinearGradient
          id="prefix__i"
          y1={0.5}
          x2={1}
          y2={0.5}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#bbc045" />
          <Stop offset={0.013} stopColor="#bbc044" />
          <Stop offset={0.581} stopColor="#d1c841" />
          <Stop offset={0.59} stopColor="#d0c741" />
          <Stop offset={1} stopColor="#bbc045" />
        </LinearGradient>
        <LinearGradient
          id="prefix__j"
          x1={21.874}
          y1={0.135}
          x2={22.719}
          y2={0.986}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#1a1718" stopOpacity={0.302} />
          <Stop offset={1} stopColor="#1a1718" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="prefix__c"
          x1={0.25}
          y1={0.068}
          x2={0.75}
          y2={0.932}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="prefix__a"
          y1={0.5}
          x2={1}
          y2={0.5}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#618230" />
          <Stop offset={0.199} stopColor="#829e40" />
          <Stop offset={0.338} stopColor="#8cab35" />
          <Stop offset={0.602} stopColor="#9dc224" />
          <Stop offset={0.691} stopColor="#96bb25" />
          <Stop offset={0.815} stopColor="#85a928" />
          <Stop offset={0.959} stopColor="#6a8b2e" />
          <Stop offset={1} stopColor="#618230" />
        </LinearGradient>
        <LinearGradient
          id="prefix__k"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__l"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__m"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__n"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__o"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__p"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__q"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__r"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__s"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__t"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__u"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__v"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__w"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__x"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__y"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__z"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__A"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__d"
          y1={0.5}
          x2={1}
          y2={0.5}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#4e2b10" />
          <Stop offset={1} stopColor="#1f0e00" />
        </LinearGradient>
        <LinearGradient
          id="prefix__e"
          x1={0.396}
          y1={0.723}
          x2={0.604}
          y2={0.256}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#fff" stopOpacity={0} />
          <Stop offset={1} />
        </LinearGradient>
        <LinearGradient
          id="prefix__B"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__b"
          x1={0.39}
          y1={1.139}
          x2={0.606}
          y2={-0.643}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#fff" stopOpacity={0} />
          <Stop offset={0.138} stopColor="#a0a0a0" stopOpacity={0.373} />
          <Stop offset={1} />
        </LinearGradient>
        <LinearGradient
          id="prefix__C"
          x1={0.39}
          y1={1.152}
          x2={0.604}
          y2={-0.691}
          xlinkHref="#prefix__b"
        />
        <LinearGradient
          id="prefix__D"
          x1={0.5}
          y1={1}
          x2={0.5}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#b1aca1" />
          <Stop offset={0.052} stopColor="#b1aca1" stopOpacity={0.867} />
          <Stop offset={0.153} stopColor="#b1aca1" stopOpacity={0.635} />
          <Stop offset={0.261} stopColor="#b1aca1" stopOpacity={0.439} />
          <Stop offset={0.375} stopColor="#b1aca1" stopOpacity={0.278} />
          <Stop offset={0.497} stopColor="#b1aca1" stopOpacity={0.157} />
          <Stop offset={0.63} stopColor="#b1aca1" stopOpacity={0.067} />
          <Stop offset={0.783} stopColor="#b1aca1" stopOpacity={0.016} />
          <Stop offset={1} stopColor="#b1aca1" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="prefix__E"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__c"
        />
        <LinearGradient
          id="prefix__F"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__G"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__H"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__I"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__J"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__K"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__L"
          x1={-0.001}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__M"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__N"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__O"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__P"
          x1={0}
          y1={0.5}
          x2={0.999}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__Q"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__R"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__S"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__T"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__d"
        />
        <LinearGradient
          id="prefix__U"
          x1={0.396}
          y1={0.723}
          x2={0.604}
          y2={0.256}
          xlinkHref="#prefix__e"
        />
        <LinearGradient
          id="prefix__V"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__W"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__X"
          x1={0}
          y1={0.5}
          x2={0.999}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__Y"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__Z"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__aa"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__ab"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__ac"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__ad"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__ae"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__af"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__ag"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__ah"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__d"
        />
        <LinearGradient
          id="prefix__aj"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__ak"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__al"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__am"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__an"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__ao"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__ap"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__aq"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__ar"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__as"
          x1={0}
          y1={0.5}
          x2={0.999}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__at"
          x1={-0.001}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__au"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__d"
        />
        <LinearGradient
          id="prefix__av"
          x1={0.396}
          y1={0.723}
          x2={0.604}
          y2={0.256}
          xlinkHref="#prefix__e"
        />
        <LinearGradient
          id="prefix__ax"
          x1={0.5}
          y1={1}
          x2={0.5}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#fff" />
          <Stop offset={0.255} stopColor="#fcfcfb" stopOpacity={0.761} />
          <Stop offset={0.84} stopColor="#f6f7f2" stopOpacity={0.165} />
          <Stop offset={1} stopColor="#f5f6f0" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="prefix__ay"
          x1={0.5}
          y1={1}
          x2={0.5}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#525252" />
          <Stop offset={0.339} stopColor="#3e3e3d" />
          <Stop offset={0.713} stopColor="#2f2e2c" />
          <Stop offset={1} stopColor="#2a2927" />
        </LinearGradient>
        <LinearGradient
          id="prefix__az"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__aA"
          x1={0}
          y1={0.5}
          x2={0.999}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__aB"
          x1={-0.001}
          y1={0.5}
          x2={1.001}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__aC"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__aD"
          x1={0}
          y1={0.5}
          x2={1.001}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__aE"
          x1={0}
          y1={0.5}
          x2={0.999}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__aF"
          x1={0}
          y1={0.5}
          x2={0.999}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__aG"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__aH"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__aI"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__aJ"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__aK"
          x1={0}
          y1={0.5}
          x2={0.999}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__aL"
          x1={0}
          y1={0.5}
          x2={0.999}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__aM"
          x1={0}
          y1={0.5}
          x2={1.001}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__aN"
          x1={-0.001}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__aO"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__aP"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__aQ"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__aR"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__aS"
          x1={0.001}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__aT"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__aU"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__aV"
          x1={0}
          y1={0.5}
          x2={1.001}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__aW"
          x1={-0.001}
          y1={0.5}
          x2={1.001}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__aX"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__aY"
          x1={0.355}
          y1={0.82}
          x2={0.645}
          y2={0.18}
          xlinkHref="#prefix__e"
        />
        <LinearGradient
          id="prefix__aZ"
          y1={0.5}
          x2={1}
          y2={0.5}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#97774a" />
          <Stop offset={1} stopColor="#daaa69" />
        </LinearGradient>
        <LinearGradient
          id="prefix__ba"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bb"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bc"
          x1={0.001}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bd"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__be"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bf"
          x1={0}
          y1={0.5}
          x2={1.001}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bg"
          x1={-0.001}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bh"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bi"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bj"
          x1={0.001}
          y1={0.5}
          x2={1.001}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bk"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bl"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bm"
          x1={0.001}
          y1={0.5}
          x2={0.999}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bn"
          x1={0}
          y1={0.5}
          x2={0.999}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bo"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bp"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bq"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__br"
          x1={0}
          y1={0.5}
          x2={0.999}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bs"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bt"
          x1={0}
          y1={0.5}
          x2={1.001}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bu"
          x1={0.001}
          y1={0.5}
          x2={0.999}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bv"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bw"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bx"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__by"
          x1={0.355}
          y1={0.82}
          x2={0.645}
          y2={0.18}
          xlinkHref="#prefix__e"
        />
        <LinearGradient
          id="prefix__bz"
          y1={0.5}
          x2={1}
          y2={0.5}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#9f705a" />
          <Stop offset={0.157} stopColor="#a0715a" stopOpacity={0.973} />
          <Stop offset={0.316} stopColor="#a5745d" stopOpacity={0.898} />
          <Stop offset={0.476} stopColor="#ad7961" stopOpacity={0.769} />
          <Stop offset={0.637} stopColor="#b98167" stopOpacity={0.592} />
          <Stop offset={0.798} stopColor="#c88a6f" stopOpacity={0.361} />
          <Stop offset={0.958} stopColor="#da9678" stopOpacity={0.082} />
          <Stop offset={1} stopColor="#e09a7b" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="prefix__bA"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bB"
          x1={0}
          y1={0.5}
          x2={0.999}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bC"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bD"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bE"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bF"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bG"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bH"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bI"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bJ"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bK"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bL"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bM"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__d"
        />
        <LinearGradient
          id="prefix__bN"
          x1={0.39}
          y1={1.139}
          x2={0.606}
          y2={-0.643}
          xlinkHref="#prefix__b"
        />
        <LinearGradient
          id="prefix__bO"
          x1={0.39}
          y1={1.152}
          x2={0.604}
          y2={-0.692}
          xlinkHref="#prefix__b"
        />
        <LinearGradient
          id="prefix__bP"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bQ"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bR"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bS"
          x1={0}
          y1={0.5}
          x2={0.999}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bT"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bU"
          x1={-0.001}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bV"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__bW"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__d"
        />
        <LinearGradient
          id="prefix__bX"
          x1={0.396}
          y1={0.723}
          x2={0.604}
          y2={0.256}
          xlinkHref="#prefix__e"
        />
        <LinearGradient
          id="prefix__bZ"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__ca"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__cb"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__cc"
          x1={0}
          y1={0.5}
          x2={0.999}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__cd"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__ce"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__cf"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__cg"
          x1={0}
          y1={0.5}
          x2={0.999}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__ch"
          x1={0}
          y1={0.5}
          x2={1}
          y2={0.5}
          xlinkHref="#prefix__a"
        />
        <LinearGradient
          id="prefix__ci"
          x1={0.396}
          y1={0.723}
          x2={0.604}
          y2={0.256}
          xlinkHref="#prefix__e"
        />
        <LinearGradient
          id="prefix__ck"
          y1={0.5}
          x2={1}
          y2={0.5}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#df6d3e" />
          <Stop offset={0.024} stopColor="#df6d3e" stopOpacity={0.886} />
          <Stop offset={0.068} stopColor="#df6d3e" stopOpacity={0.702} />
          <Stop offset={0.118} stopColor="#df6d3e" stopOpacity={0.533} />
          <Stop offset={0.173} stopColor="#df6d3e" stopOpacity={0.388} />
          <Stop offset={0.233} stopColor="#df6d3e" stopOpacity={0.267} />
          <Stop offset={0.301} stopColor="#df6d3e" stopOpacity={0.169} />
          <Stop offset={0.381} stopColor="#df6d3e" stopOpacity={0.09} />
          <Stop offset={0.479} stopColor="#df6d3e" stopOpacity={0.039} />
          <Stop offset={0.617} stopColor="#df6d3e" stopOpacity={0.008} />
          <Stop offset={1} stopColor="#df6d3e" stopOpacity={0} />
        </LinearGradient>
        <RadialGradient
          id="prefix__f"
          cx={0.746}
          cy={0.388}
          r={0.49}
          gradientUnits="objectBoundingBox"
        >
          <Stop offset={0} stopColor="#9dc224" />
          <Stop offset={0.945} stopColor="#64852f" />
          <Stop offset={1} stopColor="#618230" />
        </RadialGradient>
        <RadialGradient
          id="prefix__ai"
          cx={0.746}
          cy={0.388}
          r={0.49}
          xlinkHref="#prefix__f"
        />
        <RadialGradient
          id="prefix__aw"
          cx={0.746}
          cy={0.388}
          r={0.49}
          xlinkHref="#prefix__f"
        />
        <RadialGradient
          id="prefix__bY"
          cx={0.753}
          cy={0.594}
          r={0.49}
          gradientTransform="rotate(45 .746 .388)"
          xlinkHref="#prefix__f"
        />
        <RadialGradient
          id="prefix__cj"
          cx={0.746}
          cy={0.388}
          r={0.49}
          xlinkHref="#prefix__f"
        />
      </Defs>
      <G transform="translate(.003 -.004)" filter="url(#prefix__g)">
        <Circle
          cx={44}
          cy={44}
          r={44}
          transform="translate(33.07 18)"
          fill="#fff"
        />
      </G>
      <Path
        d="M65.861 57.534l-32.86 16.965 45.823 21.518 32.789-18.353z"
        fill="#707070"
        opacity={0.31}
      />
      <Path
        d="M107.667 455.617c0 .023-.006.045-.01.067s-.008.051-.014.076l-.017.067-.021.075-.023.067-.029.074-.029.066a1.802 1.802 0 01-.12.218l-.04.061-.065.09-.042.054a6.4 6.4 0 01-.084.1l-.037.043q-.072.078-.155.154l-.044.039q-.065.058-.135.115l-.065.051-.086.064-.082.058-.093.062-.089.057-.1.06-.1.055-.108.058c-.046.024-.091.049-.138.072L86.022 468.3a6.93 6.93 0 01-.4.18l-.109.044c-.125.049-.252.1-.382.139l-.05.018c-.15.049-.3.093-.46.135l-.073.019q-.226.058-.46.106l-.072.014q-.234.046-.474.082l-.1.014c-.136.019-.274.036-.413.05l-.12.012q-.241.022-.484.034h-.089c-.167.007-.335.012-.5.012h-.05c-.125 0-.25 0-.375-.009-.1 0-.2-.008-.3-.014s-.184-.012-.275-.02-.2-.018-.3-.029c-.131-.014-.263-.028-.392-.047h-.029a9.548 9.548 0 01-.488-.085l-.077-.015c-.152-.031-.3-.066-.449-.1l-.125-.033q-.184-.049-.362-.106l-.1-.032c-.108-.036-.213-.076-.317-.115l-.153-.057q-.226-.091-.437-.195l-39.116-20.118c-1.174-.579-1.761-1.34-1.758-2.1v1.208c0 .76.584 1.52 1.758 2.1l39.106 20.117c.14.069.287.134.437.195.05.02.1.038.154.057.089.034.177.069.269.1l.048.015.1.032q.178.056.362.106l.125.033.084.022c.12.029.242.056.365.081l.077.015.179.034c.1.018.205.035.309.05h.029c.084.012.168.024.252.034.046.006.093.008.14.013q.148.016.3.029c.048 0 .094.01.142.014s.089 0 .133.006c.1.006.2.01.3.014.05 0 .1.006.151.007h.611l.165-.007h.09c.136-.007.272-.015.406-.027l.077-.008.12-.012q.208-.021.413-.05l.1-.014.049-.006c.143-.022.285-.048.425-.076l.072-.014q.234-.047.46-.106l.072-.019.1-.026q.184-.051.362-.109l.051-.018c.13-.043.257-.09.382-.139l.109-.044c.138-.057.273-.116.4-.18l19.926-10.78.073-.037.066-.035.108-.058.1-.055.1-.06.089-.057.093-.062.082-.059.086-.064.035-.026.03-.025c.047-.038.092-.076.135-.115l.044-.039c.055-.051.106-.1.154-.154l.007-.006.031-.036c.029-.033.057-.066.084-.1l.042-.054c.023-.03.045-.06.065-.09l.018-.025.023-.037.046-.076c.015-.025.024-.043.035-.064l.038-.077.017-.035.012-.031c.004-.01.02-.049.028-.073l.023-.067c.007-.022.015-.049.021-.074l.011-.04c.003-.013 0-.018 0-.027l.014-.076.01-.067c.003-.022 0-.051.006-.077s0-.03 0-.045v-1.253.09c0 .03.001.046-.002.072z"
        transform="translate(3.51 -387.664)"
        fill="url(#prefix__h)"
      />
      <Path
        d="M105.932 411.658l-39.106-20.117a10.7 10.7 0 00-8.424 0l-19.926 10.78c-2.319 1.152-2.306 3.019.027 4.171l39.107 20.117a10.7 10.7 0 008.424 0l19.926-10.779c2.318-1.153 2.306-3.02-.028-4.172z"
        transform="translate(3.498 -345.972)"
        fill="url(#prefix__i)"
      />
      <G transform="translate(75.051 53.855)" fill="url(#prefix__j)">
        <Path d="M2.538.246L2.985 0l2.287 1.46-.363.259zM0 2.202l.447-.246 2.287 1.46-.363.259zM4.32 3.784l.447-.246 2.287 1.46-.363.259z" />
      </G>
      <Path
        d="M81.528 35.635l.234-.136-3.864-2.232-.234.136 3.864 2.232z"
        fill="#a42215"
      />
      <Path
        d="M77.67 33.402v.259l3.861 2.232v-.259l-3.861-2.232z"
        fill="#961f12"
      />
      <Path
        d="M77.598 54.171l.447-.339V29.224l-.447.089v24.859z"
        fill="#cd6125"
      />
      <Path
        d="M81.528 46.515l.234-.136-3.864-2.232-.234.136 3.864 2.232z"
        fill="#a42215"
      />
      <Path
        d="M77.598 54.171l-.351-.283V29.029l.351.283v24.859z"
        fill="#f6803e"
      />
      <Path
        d="M77.668 39.037h.3l3.866 7.482h-.308l-3.862-7.482z"
        fill="#dd5337"
      />
      <Path
        d="M81.528 41.031l.234-.136-3.864-2.232-.234.136 3.864 2.232z"
        fill="#a42215"
      />
      <Path
        d="M77.67 38.798v.259l3.861 2.232v-.259l-3.861-2.232z"
        fill="#961f12"
      />
      <Path
        d="M81.555 41.054l-.328-.2-3.56-6.853v-.452l3.887 7.5z"
        fill="#ea371e"
      />
      <Path
        d="M81.624 40.901l-.307-.176-3.56-6.853v-.452l3.866 7.482z"
        fill="#ea371e"
      />
      <Path
        d="M77.668 33.551h.3l3.866 7.482-.307-.02-3.863-7.461z"
        fill="#dd5337"
      />
      <Path
        d="M77.67 44.285v.259l3.861 2.232v-.259l-3.861-2.232z"
        fill="#961f12"
      />
      <Path
        d="M81.528 46.518l-.3-.176-3.56-6.853v-.452l3.862 7.482z"
        fill="#ea371e"
      />
      <Path
        d="M73.414 27.239l-.206-.12-1.861 1.076.2.116 1.862-1.072z"
        fill="#f39f6e"
      />
      <Path
        d="M81.877 56.187l.447-.246v-24.28l-.447.064v24.462z"
        fill="#cd6125"
      />
      <Path
        d="M81.877 56.187l-.351-.206V31.52l.351.206v24.461z"
        fill="#f6803e"
      />
      <Path
        d="M76.854 35.312l1.915-1.113v-1.181l-1.915 1.113v1.181z"
        fill="#b92718"
      />
      <Path
        d="M76.961 34.809l1.692-.983v-.674l-1.692.984v.674z"
        fill="#ecf5e9"
      />
      <Path
        d="M76.857 34.131l1.915-1.113-.312-.619-1.915 1.113.312.619z"
        fill="#d62c1c"
      />
      <Path
        d="M76.957 34.023l1.676-.974-.17-.341-1.676.974.17.341z"
        fill="#ecf5e9"
      />
      <Path
        d="M76.545 33.512l1.915-1.113-1.607-.921-1.915 1.113 1.607.921z"
        fill="#f06440"
      />
      <Path
        d="M74.942 32.586v1.62l1.917 1.106v-1.181l-.312-.619-1.6-.926z"
        fill="#ea371e"
      />
      <Path
        d="M73.92 28.577l.389-.226.006-2.09-.389.226-.006 2.09z"
        fill="#b92718"
      />
      <Path
        d="M73.926 26.486l.389-.226-.836-.483-.389.226.836.483z"
        fill="#f06440"
      />
      <Path
        d="M73.09 26.003l-.006 2.09.836.483.006-2.09-.836-.483z"
        fill="#ea371e"
      />
      <Path
        d="M73.503 28.816l.389-.226.006-2.09-.389.226-.006 2.09z"
        fill="#b92718"
      />
      <Path
        d="M73.508 26.725l.389-.226-.836-.483-.389.226.836.483z"
        fill="#f06440"
      />
      <Path
        d="M72.673 26.242l-.006 2.09.836.483.006-2.09-.836-.483z"
        fill="#ea371e"
      />
      <Path
        d="M73.084 29.055l.389-.226.006-2.09-.389.226-.006 2.09z"
        fill="#b92718"
      />
      <Path
        d="M73.09 26.964l.389-.226-.836-.483-.389.226.836.483z"
        fill="#f06440"
      />
      <Path
        d="M72.254 26.482l-.006 2.09.836.483.006-2.09-.836-.483z"
        fill="#ea371e"
      />
      <Path
        d="M72.667 29.294l.389-.226.006-2.09-.389.226-.006 2.09z"
        fill="#b92718"
      />
      <Path
        d="M72.673 27.204l.389-.226-.836-.483-.389.226.836.483z"
        fill="#f06440"
      />
      <Path
        d="M71.837 26.721l-.006 2.09.836.483.006-2.09-.836-.483z"
        fill="#ea371e"
      />
      <Path
        d="M84.34 32.999l-.206-.12-2.091 1.207.206.12 2.091-1.207zM79.561 30.243l-.206-.12-2.091 1.207.206.12 2.091-1.207z"
        fill="#f39f6e"
      />
      <Path
        d="M77.47 31.451v.316l2.091-1.207v-.316l-2.091 1.207zM82.249 34.206v.316l2.091-1.207v-.316l-2.091 1.207z"
        fill="#cd6125"
      />
      <Path
        d="M78.06 34.175l-.438.254.162-.767.438-.254-.162.767zM77.425 33.87l.243-.141-.162.767-.243.141.162-.767zM77.56 33.232l.243-.141-.106.5-.243.141.106-.5zM77.918 33.024l.438-.254-.106.5-.438.254.106-.5z"
        fill="#fff"
      />
      <Path
        d="M77.494 31.761l4.456.167v-.308l-4.456-.167v.308z"
        fill="#f6803e"
      />
      <Path
        d="M74.782 27.478l-.206-.12-2.094 1.203.206.12 2.091-1.207z"
        fill="#f39f6e"
      />
      <Path
        d="M72.691 28.686v.316l2.091-1.207v-.316l-2.091 1.207z"
        fill="#cd6125"
      />
      <Path
        d="M81.744 31.501l.206.12-4.456-.167-.206-.12 4.456.167z"
        fill="#f39f6e"
      />
      <Path
        d="M72.716 28.999l4.456.167v-.308l-4.456-.159v.308z"
        fill="#f6803e"
      />
      <Path
        d="M76.966 28.742l.206.12-4.456-.167-.206-.12 4.456.167zM81.951 31.618l-.206-.12-2.091 1.207.206.12 2.091-1.207z"
        fill="#f39f6e"
      />
      <Path
        d="M79.864 32.825v.316l2.091-1.207v-.321l-2.091 1.207z"
        fill="#cd6125"
      />
      <Path
        d="M77.172 28.862l-.206-.12-2.091 1.207.206.12 2.091-1.207z"
        fill="#f39f6e"
      />
      <Path
        d="M75.081 30.069v.316l2.091-1.207v-.316l-2.091 1.207z"
        fill="#cd6125"
      />
      <Path
        d="M79.032 24.828l-.389-.226-.229.132.389.226.229-.132z"
        fill="#cd885f"
      />
      <Path
        d="M79.031 24.828l-.389-.226-.229.132.389.226.229-.132z"
        fill="#cd885f"
      />
      <Path
        d="M78.802 24.961l-.389-.226-1.537 3.892.389.226 1.537-3.892z"
        fill="#f6803e"
      />
      <Path
        d="M78.802 24.961l-1.537 3.893.229-.132 1.537-3.893-.229.132z"
        fill="#cd6125"
      />
      <Path
        d="M78.803 24.961l-.389-.226 3.165 6.61.389.226-3.165-6.61z"
        fill="#f6803e"
      />
      <Path
        d="M78.803 24.961l3.165 6.61.229-.132-3.165-6.61-.229.132z"
        fill="#cd6125"
      />
      <Path
        d="M78.796 24.961l-.389-.226-3.858 5.282.389.226 3.858-5.282z"
        fill="#f6803e"
      />
      <Path
        d="M78.801 24.961l-3.858 5.283.229-.132 3.858-5.283-.229.132zM75.081 56.129l.447-.347v-25.2l-.447.091v25.454zM79.758 25.114l-.462.263v.326l.462-.263v-.326z"
        fill="#cd6125"
      />
      <Path
        d="M78.034 24.121l-.462.263 1.724.993.462-.263-1.724-.993z"
        fill="#f39f6e"
      />
      <Path d="M75.172 27.607l.078-.045v-.447l-.078.045v.451z" fill="#b92718" />
      <Path
        d="M75.147 27.07a.214.214 0 00-.027-.037.152.152 0 00-.033-.027.083.083 0 00-.034-.012.048.048 0 00-.028.006l.078-.045h.04l.012.006a.141.141 0 01.029.022l.007.009.006.008v.052a.067.067 0 010 .01v.012a.141.141 0 010 .017l-.078.045a.157.157 0 00-.007-.043.2.2 0 00-.019-.043z"
        fill="#f06440"
      />
      <Path
        d="M75.086 27.004c-.049-.028-.088-.006-.089.05v.452l.176.1v-.451a.193.193 0 00-.087-.152z"
        fill="#ea371e"
      />
      <Path
        d="M79.379 57.628l.447-.246V33.101l-.447.064v24.462z"
        fill="#cd6125"
      />
      <Path
        d="M75.081 56.129l-.351-.289V30.385l.351.289v25.454z"
        fill="#f6803e"
      />
      <Path
        d="M75.032 27.151l.017.1.078-.045 2.662-2.455-.093-.055-2.665 2.457z"
        fill="#b92718"
      />
      <Path
        d="M74.953 27.197l.1.054 2.662-2.455-.093-.056-2.665 2.457z"
        fill="#ea371e"
      />
      <Path
        d="M72.977 28.43l.017.1.078-.045 4.854-3.826-.093-.055-4.856 3.828z"
        fill="#b92718"
      />
      <Path
        d="M72.896 28.475l.1.054 4.854-3.826-.093-.056-4.856 3.828z"
        fill="#ea371e"
      />
      <Path
        d="M77.572 24.71l1.724.993v-.326l-1.724-.993v.326z"
        fill="#f6803e"
      />
      <Path d="M72.983 29.026l.078-.045v-.451l-.078.045v.452z" fill="#b92718" />
      <Path
        d="M72.958 28.488a.191.191 0 00-.027-.037.158.158 0 00-.033-.027.085.085 0 00-.034-.012.046.046 0 00-.028.006l.078-.045H72.959l.012.006a.139.139 0 01.029.022l.007.009.006.008.005.008V28.471a.071.071 0 010 .01.107.107 0 010 .012.137.137 0 010 .017l-.078.045a.148.148 0 00-.007-.043.2.2 0 00-.019-.042z"
        fill="#f06440"
      />
      <Path
        d="M72.897 28.422c-.049-.028-.088-.005-.089.05v.451l.176.1v-.451a.194.194 0 00-.087-.152z"
        fill="#ea371e"
      />
      <Path
        d="M79.025 36.84l.234-.136-3.864-2.232-.234.136 3.864 2.232zM79.025 42.328l.234-.136-3.864-2.232-.234.136 3.864 2.232zM79.025 47.815l.234-.136-3.864-2.232-.234.136 3.864 2.232z"
        fill="#a42215"
      />
      <Path
        d="M75.165 45.582v.259l3.864 2.232v-.259l-3.864-2.232z"
        fill="#961f12"
      />
      <Path
        d="M79.048 42.37l-.328-.2-3.56-6.853v-.452l3.887 7.5zM79.332 42.348l-.307-.176-3.56-6.853v-.452l3.866 7.482z"
        fill="#ea371e"
      />
      <Path
        d="M75.162 34.867h.3l3.866 7.482-.306-.02-3.864-7.461z"
        fill="#f06440"
      />
      <Path
        d="M79.037 47.818l-.316-.176-3.56-6.853v-.452l3.874 7.482z"
        fill="#ea371e"
      />
      <Path
        d="M75.162 40.333h.3l3.866 7.482h-.3l-3.874-7.482z"
        fill="#f06440"
      />
      <Path
        d="M75.165 34.609v.259l3.861 2.232v-.259l-3.861-2.232z"
        fill="#961f12"
      />
      <Path d="M79.028 57.423V32.961l.351.206v24.464z" fill="#f6803e" />
      <Path
        d="M75.165 40.096v.259l3.864 2.232v-.259l-3.864-2.232z"
        fill="#961f12"
      />
      <Path
        d="M75.742 34.631l.673.389v-1.234l-.673-.389v1.234z"
        fill="#b92718"
      />
      <Path
        d="M75.789 33.424l.626.362v1.176l-.626-.362v-1.176z"
        fill="#d62c1c"
      />
      <Path
        d="M75.813 34.16a.043.043 0 11.028.046.038.038 0 01-.028-.046z"
        fill="#ac211b"
      />
      <Path
        d="M75.813 34.16a.032.032 0 01.019-.019.042.042 0 01.016 0 .038.038 0 01.028.046.031.031 0 01-.019.019.044.044 0 01-.016 0 .039.039 0 01-.028-.046z"
        fill="#b92718"
      />
      <Path
        d="M88.667 36.968l1.039.6-1.039-1.039z"
        fill="#b1aca1"
        opacity={0.3}
        style={{
          mixBlendMode: "multiply",
          isolation: "isolate",
        }}
      />
      <Path
        d="M91.011 43.068l.023.008a.037.037 0 01.018.01.039.039 0 01.005.023v.159a.133.133 0 010 .042c-.01.034-.044.053-.074.073a.394.394 0 00-.12.117.236.236 0 00-.036.161.175.175 0 00.2.139.147.147 0 00.116-.1.327.327 0 00-.005-.1.024.024 0 010-.013.021.021 0 01.023-.008c.029 0 .047.035.056.063a.285.285 0 01-.055.272.266.266 0 01-.181.076.355.355 0 01-.274-.108.393.393 0 01-.088-.311c0-.014 0-.028.006-.042a.484.484 0 01.015-.058.455.455 0 01.146-.192.168.168 0 00.025-.024.134.134 0 00.022-.051.6.6 0 00.011-.121c0-.024.008-.031.034-.033a.335.335 0 01.133.025z"
        fill="#8c8b8b"
      />
      <Path
        d="M90.764 43.596a.256.256 0 010-.046.232.232 0 01.066-.143c.034-.031.081-.049.108-.087.042-.062.018-.148.009-.216 0-.014 0-.032.009-.04a.036.036 0 01.024 0 .121.121 0 01.07.029.038.038 0 01.005.023v.159a.131.131 0 010 .042c-.01.034-.044.053-.074.073a.394.394 0 00-.12.117.236.236 0 00-.036.161.174.174 0 00.183.141.154.154 0 01-.18-.042.268.268 0 01-.064-.167z"
        fill="#676767"
      />
      <Path d="M91.202 41.92l.022.014v-4.958l-.022.032v4.912z" fill="#b4b4b3" />
      <Path d="M91.246 41.92l-.022.014v-4.958l.022.032v4.912z" fill="#8c8b8b" />
      <Path
        d="M90.63 42.477l-.159-.092.342.741.159.092-.342-.741zM90.629 42.36l-.159-.092v.116l.159.092v-.116z"
        fill="#393939"
      />
      <Path
        d="M90.864 41.956l-.159-.092-.234.406.159.092.234-.405zM91.183 41.771l-.159-.092-.319.184.159.092.319-.184z"
        fill="#4e4e4e"
      />
      <Path
        d="M90.864 41.955l-.234.405v.116l.342.741.111-.064.336-1.132v-.116l-.236-.134-.319.184z"
        fill="#303030"
      />
      <Path
        d="M90.631 42.133l.022.014v-4.958l-.022.032v4.912z"
        fill="#b4b4b3"
      />
      <Path
        d="M90.675 42.133l-.022.014v-4.958l.022.032v4.912z"
        fill="#8c8b8b"
      />
      <Path
        d="M91.085 36.766v.186l-2.881 1.66v-.186l2.881-1.66z"
        fill="#303030"
      />
      <Path
        d="M90.509 36.43l.579.336-2.881 1.66-.579-.336 2.881-1.66z"
        fill="#4e4e4e"
      />
      <Path
        d="M96.354 39.901v.386L73.918 27.333v-.386l22.436 12.954z"
        fill="#f6803e"
      />
      <Path
        d="M74.194 26.787l22.435 12.952-.277.161-22.436-12.952.277-.162zM93.896 38.518l-.206-.12-2.091 1.207.206.12 2.091-1.207z"
        fill="#f39f6e"
      />
      <Path
        d="M91.805 39.725v.316l2.092-1.203v-.316l-2.091 1.207z"
        fill="#cd6125"
      />
      <Path
        d="M89.118 35.755l-.206-.12-2.091 1.207.206.12 2.091-1.207z"
        fill="#f39f6e"
      />
      <Path
        d="M87.027 36.962v.316l2.091-1.207v-.316l-2.091 1.207z"
        fill="#cd6125"
      />
      <Path
        d="M82.272 34.519l4.456.167v-.308l-4.456-.167v.308z"
        fill="#f6803e"
      />
      <Path
        d="M86.523 34.258l.206.12-4.456-.167-.206-.12 4.456.167z"
        fill="#f39f6e"
      />
      <Path
        d="M86.729 34.383l-.206-.12-2.091 1.207.206.12 2.091-1.207z"
        fill="#f39f6e"
      />
      <Path
        d="M84.638 35.587v.316l2.091-1.207v-.316l-2.091 1.207zM94.265 41.49l-.277.161v-.386l.277-.162v.386zM96.628 40.117l-.277.161v-.386l.277-.161v.386z"
        fill="#cd6125"
      />
      <Path d="M87.629 38.089v.187l.579.336v-.186l-.579-.336z" fill="#393939" />
      <Path
        d="M91.829 40.032l4.456.167v-.308l-4.456-.167v.308z"
        fill="#f6803e"
      />
      <Path
        d="M96.079 39.772l.206.12-4.456-.167-.206-.12 4.456.167z"
        fill="#f39f6e"
      />
      <Path
        d="M87.05 37.275l4.456.167v-.308l-4.456-.167v.308z"
        fill="#f6803e"
      />
      <Path
        d="M91.301 37.016l.206.12-4.456-.167-.206-.12 4.456.167z"
        fill="#f39f6e"
      />
      <Path
        d="M94.194 41.099v.316l2.091-1.207v-.316l-2.091 1.207z"
        fill="#cd6125"
      />
      <Path
        d="M91.507 37.134l-.206-.12-2.091 1.207.206.12 2.091-1.207z"
        fill="#f39f6e"
      />
      <Path
        d="M89.412 38.341v.316l2.1-1.21v-.316l-2.091 1.207z"
        fill="#cd6125"
      />
      <Path
        d="M71.624 28.034l22.641 13.073-.277.161-22.646-13.072.277-.161z"
        fill="#f39f6e"
      />
      <Path
        d="M96.285 39.892l-.206-.12-2.091 1.207.206.12 2.091-1.207z"
        fill="#f39f6e"
      />
      <Path d="M93.761 38.337l.078-.045v-.451l-.078.045v.451z" fill="#b92718" />
      <Path
        d="M93.737 37.799a.214.214 0 00-.027-.037.151.151 0 00-.033-.027.085.085 0 00-.034-.012.048.048 0 00-.028.006l.078-.045h.041l.012.006a.14.14 0 01.029.022l.007.009.006.008.005.008V37.791a.074.074 0 010 .012.1.1 0 010 .017l-.078.045a.158.158 0 00-.007-.043.2.2 0 00-.019-.043z"
        fill="#f06440"
      />
      <Path
        d="M93.676 37.734c-.048-.028-.088-.005-.088.051v.451l.175.1v-.452a.194.194 0 00-.087-.152z"
        fill="#ea371e"
      />
      <Path d="M93.645 37.968l.05-.028v-.074l-.05.027v.075z" fill="#b92718" />
      <Path
        d="M93.651 37.893l.05-.027-14.15-12.481-.05.027 14.15 12.481z"
        fill="#f06440"
      />
      <Path
        d="M79.502 25.412v.074l14.149 12.482v-.074L79.504 25.413z"
        fill="#ea371e"
      />
      <Path
        d="M91.529 39.171l.05-.027-12.028-13.759-.05.027 12.027 13.759z"
        fill="#f06440"
      />
      <Path
        d="M79.501 25.412v.074l12.013 13.742v-.074L79.501 25.412z"
        fill="#ea371e"
      />
      <Path d="M91.515 39.669l.078-.045v-.451l-.078.045v.451z" fill="#b92718" />
      <Path
        d="M91.49 39.131a.2.2 0 00-.027-.037.155.155 0 00-.033-.027.085.085 0 00-.034-.012.046.046 0 00-.028.006l.078-.045h.04l.012.006a.135.135 0 01.029.022l.007.009.006.008.005.008v.067a.134.134 0 010 .017l-.078.045a.15.15 0 00-.007-.043.223.223 0 00-.019-.042z"
        fill="#f06440"
      />
      <Path
        d="M91.429 39.065c-.049-.028-.088-.005-.088.051v.451l.176.1v-.451a.2.2 0 00-.087-.152z"
        fill="#ea371e"
      />
      <Path
        d="M93.988 41.265v.386L71.342 28.58v-.386l22.641 13.07z"
        fill="#f6803e"
      />
      <Path
        d="M78.306 24.961l.844 8 .229-.132-.844-8-.229.132z"
        fill="#cd6125"
      />
      <Path
        d="M78.306 24.961l-.389-.226.844 8 .389.226-.844-8z"
        fill="#f6803e"
      />
      <G
        opacity={0.3}
        style={{
          mixBlendMode: "multiply",
          isolation: "isolate",
        }}
      >
        <Path
          d="M143.337 453.752l6.737 3.915 6.782-3.915-6.737-3.915z"
          transform="translate(-76.71 -390.488)"
          fill="url(#prefix__c)"
        />
      </G>
      <G>
        <Path
          d="M96.431 458.931a.571.571 0 00-.041-.088.617.617 0 00-.057-.087.812.812 0 00-.072-.08c-.027-.024-.055-.047-.083-.068s-.06-.037-.088-.053-.06-.026-.088-.038a.7.7 0 00-.082-.023.554.554 0 00-.125-.018h-.048l.04.027.046.028.058.036.067.042c.023.016.046.034.071.049s.047.038.072.056l.07.061c.021.022.045.042.064.066a.847.847 0 01.058.069c.019.023.034.046.051.068s.03.044.042.065a1.436 1.436 0 01.078.148.278.278 0 00.006-.048.488.488 0 00-.012-.127.548.548 0 00-.027-.085z"
          transform="translate(-40.9 -396.988)"
          fill="url(#prefix__a)"
        />
        <Path
          d="M98.618 457.568a.621.621 0 00-.181.3.632.632 0 00-.021.091.568.568 0 00-.011.09.8.8 0 000 .084.3.3 0 00.006.075.685.685 0 00.022.11c.007.026.013.041.013.041l.014-.041c.008-.026.017-.063.028-.106l.017-.069.019-.076.02-.08c.007-.027.014-.054.023-.081l.025-.079c.008-.025.019-.05.027-.076s.019-.048.03-.069.02-.043.03-.061a.93.93 0 01.054-.09l.025-.034a.2.2 0 00-.042.013.357.357 0 00-.098.058z"
          transform="translate(-42.898 -396.25)"
          fill="url(#prefix__k)"
        />
        <Path
          d="M97.9 457.5a.783.783 0 00-.055-.116.594.594 0 00-.021.128 1.083 1.083 0 00.019.274 1.07 1.07 0 00.084.262.6.6 0 00.066.111.737.737 0 00.007-.129 1.407 1.407 0 00-.027-.27 1.469 1.469 0 00-.073-.26z"
          transform="translate(-42.459 -396.167)"
          fill="url(#prefix__l)"
        />
        <Path
          d="M96.558 459.3a.458.458 0 00-.032-.069.494.494 0 00-.045-.069.655.655 0 00-.057-.063c-.021-.019-.043-.037-.066-.054s-.047-.029-.07-.042-.047-.021-.069-.03a.574.574 0 00-.065-.018.455.455 0 00-.1-.014h-.038l.031.021.036.022c.014.007.029.018.046.028l.052.033.056.039c.02.013.037.03.057.044l.055.049c.017.018.035.033.051.052s.033.035.046.054l.04.054a.375.375 0 01.033.052 1.141 1.141 0 01.062.117.2.2 0 000-.038.382.382 0 00-.009-.1.477.477 0 00-.014-.068z"
          transform="translate(-41.104 -397.341)"
          fill="url(#prefix__m)"
        />
        <Path
          d="M98.285 458.227a.489.489 0 00-.143.234.5.5 0 00-.017.072.441.441 0 00-.008.071.612.612 0 000 .066c0 .021 0 .041.005.059a.512.512 0 00.017.087l.01.032s0-.012.011-.032.013-.049.022-.083c0-.017.01-.035.014-.055l.015-.06.016-.063c.006-.021.011-.043.018-.064l.02-.063.022-.06c.007-.02.015-.038.024-.055l.024-.049a.759.759 0 01.043-.071l.02-.027a.159.159 0 00-.033.01.282.282 0 00-.08.051z"
          transform="translate(-42.681 -396.757)"
          fill="url(#prefix__n)"
        />
        <Path
          d="M97.715 458.173a.615.615 0 00-.044-.092.461.461 0 00-.016.1.858.858 0 00.015.217.847.847 0 00.067.206.478.478 0 00.052.088.581.581 0 00.007-.1 1.2 1.2 0 00-.081-.419z"
          transform="translate(-42.335 -396.692)"
          fill="url(#prefix__o)"
        />
        <Path
          d="M98.6 457.385c-.01-.032-.023-.061-.034-.09a.694.694 0 00-.04-.075.562.562 0 00-.075-.1.758.758 0 00-.032-.035s0 .018.009.047.007.032.012.052l.014.067.016.077c0 .027.008.056.014.085s0 .06.009.09 0 .061 0 .093v.092c0 .03 0 .061-.009.09s-.01.057-.014.084-.011.052-.018.075a1.426 1.426 0 01-.052.159.288.288 0 00.039-.029.488.488 0 00.083-.1.573.573 0 00.043-.075.584.584 0 00.034-.091.628.628 0 00.023-.1.772.772 0 00.008-.107c0-.036 0-.072-.009-.107s-.021-.07-.021-.102z"
          transform="translate(-42.896 -395.941)"
          fill="url(#prefix__p)"
        />
        <Path
          d="M99.319 459.136a.617.617 0 00-.339.076.641.641 0 00-.08.048.6.6 0 00-.072.055.756.756 0 00-.061.057l-.049.057a.68.68 0 00-.064.093c-.014.023-.021.038-.021.038l.039-.019c.025-.012.056-.032.1-.053l.062-.036.068-.039.072-.041c.025-.014.049-.028.074-.04l.074-.037c.024-.012.049-.022.073-.033s.048-.02.07-.027.044-.016.065-.021a.881.881 0 01.1-.023l.042-.005a.19.19 0 00-.038-.021.356.356 0 00-.115-.029z"
          transform="translate(-43.072 -397.484)"
          fill="url(#prefix__q)"
        />
        <Path
          d="M99.085 458.156a1.07 1.07 0 00-.129.243.615.615 0 00-.034.125.705.705 0 00.1-.083 1.418 1.418 0 00.175-.208 1.458 1.458 0 00.133-.233.8.8 0 00.045-.121.58.58 0 00-.106.074 1.07 1.07 0 00-.184.203z"
          transform="translate(-43.288 -396.538)"
          fill="url(#prefix__r)"
        />
        <G>
          <Path
            d="M95.369 458.833a.577.577 0 00-.041-.088.624.624 0 00-.057-.087.8.8 0 00-.072-.08c-.027-.024-.055-.047-.083-.068s-.06-.037-.088-.053-.06-.027-.088-.038a.738.738 0 00-.082-.023.572.572 0 00-.125-.018h-.048l.04.027c.013.008.028.018.046.027s.037.023.058.036l.067.042c.023.016.046.033.071.049s.047.038.072.056l.069.062c.021.022.045.043.064.066a.891.891 0 01.058.068c.019.023.034.047.051.069s.03.044.042.065a1.427 1.427 0 01.078.148.282.282 0 00.006-.048.478.478 0 00-.012-.127.545.545 0 00-.026-.085z"
            transform="translate(-40.101 -396.915)"
            fill="url(#prefix__s)"
          />
          <Path
            d="M97.556 457.47a.615.615 0 00-.181.3.6.6 0 00-.021.092.564.564 0 00-.011.089.813.813 0 000 .084.3.3 0 00.006.075.685.685 0 00.022.11c.007.026.013.041.013.041l.014-.041c.008-.026.017-.063.028-.106l.017-.069.019-.076.02-.08c.007-.027.014-.054.023-.081l.025-.079.027-.076c.008-.025.019-.048.03-.069l.03-.062a.922.922 0 01.055-.09c.015-.022.026-.034.026-.034a.18.18 0 00-.042.013.354.354 0 00-.1.059z"
            transform="translate(-42.099 -396.176)"
            fill="url(#prefix__t)"
          />
          <Path
            d="M96.835 457.4a.764.764 0 00-.055-.116.591.591 0 00-.021.128 1.083 1.083 0 00.019.274 1.062 1.062 0 00.084.261.609.609 0 00.066.112.725.725 0 00.009-.129 1.432 1.432 0 00-.027-.27 1.468 1.468 0 00-.075-.26z"
            transform="translate(-41.66 -396.094)"
            fill="url(#prefix__u)"
          />
          <Path
            d="M95.5 459.205a.44.44 0 00-.032-.069.483.483 0 00-.045-.069.656.656 0 00-.057-.063c-.021-.019-.043-.037-.066-.054s-.047-.029-.07-.042-.047-.021-.069-.03a.512.512 0 00-.065-.018.435.435 0 00-.1-.014h-.038l.032.021.036.022c.014.007.029.018.046.029l.053.033c.018.013.036.027.056.039s.037.03.056.044l.055.048c.017.018.035.034.051.052a.693.693 0 01.046.054c.015.018.027.037.04.054s.024.035.033.052a1.154 1.154 0 01.062.117.2.2 0 000-.038.373.373 0 00-.01-.1.432.432 0 00-.014-.068z"
            transform="translate(-40.304 -397.267)"
            fill="url(#prefix__v)"
          />
          <Path
            d="M97.223 458.129a.49.49 0 00-.143.234.506.506 0 00-.017.072.475.475 0 00-.009.071v.125a.544.544 0 00.018.087l.01.032s0-.012.011-.032.013-.05.022-.083c0-.017.01-.035.014-.055s.011-.039.015-.06.01-.042.016-.063.011-.043.018-.064l.02-.063.022-.06c.007-.02.015-.038.023-.055s.015-.034.024-.049a.7.7 0 01.043-.071.279.279 0 01.02-.026.14.14 0 00-.033.01.285.285 0 00-.074.05z"
            transform="translate(-41.882 -396.684)"
            fill="url(#prefix__w)"
          />
          <Path
            d="M96.653 458.075a.616.616 0 00-.044-.092.456.456 0 00-.016.1.893.893 0 00.081.423.466.466 0 00.052.088.581.581 0 00.007-.1 1.2 1.2 0 00-.081-.419z"
            transform="translate(-41.536 -396.619)"
            fill="url(#prefix__x)"
          />
          <Path
            d="M97.534 457.286c-.01-.032-.023-.062-.034-.09a.683.683 0 00-.04-.075.564.564 0 00-.075-.1.758.758 0 00-.032-.035s0 .018.009.047c0 .015.007.032.012.052l.014.067.016.077c0 .027.008.056.014.085s0 .06.01.09v.185c0 .03 0 .061-.008.089s-.01.057-.014.084-.011.052-.018.075a1.454 1.454 0 01-.052.159.278.278 0 00.039-.029.493.493 0 00.083-.1.539.539 0 00.043-.075.582.582 0 00.035-.091.626.626 0 00.023-.1.777.777 0 00.008-.107c0-.036 0-.072-.009-.107l-.024-.101z"
            transform="translate(-42.097 -395.867)"
            fill="url(#prefix__y)"
          />
          <Path
            d="M98.257 459.038a.619.619 0 00-.338.076.649.649 0 00-.08.048.583.583 0 00-.072.055.755.755 0 00-.061.057 1.088 1.088 0 00-.049.056.636.636 0 00-.064.093c-.014.023-.021.038-.021.038l.039-.019c.024-.012.056-.032.1-.053l.062-.036c.021-.014.045-.025.068-.039l.072-.041c.025-.014.049-.028.074-.04l.074-.037c.024-.012.05-.021.074-.033s.048-.02.07-.027.044-.016.065-.021a.864.864 0 01.1-.023.362.362 0 01.042-.005.2.2 0 00-.038-.021.365.365 0 00-.117-.028z"
            transform="translate(-42.273 -397.41)"
            fill="url(#prefix__z)"
          />
          <Path
            d="M98.022 458.058a1.078 1.078 0 00-.129.242.615.615 0 00-.034.125.739.739 0 00.1-.083 1.416 1.416 0 00.174-.207 1.448 1.448 0 00.135-.235.775.775 0 00.045-.121.589.589 0 00-.106.074 1.09 1.09 0 00-.185.205z"
            transform="translate(-42.489 -396.465)"
            fill="url(#prefix__A)"
          />
        </G>
        <Path
          d="M96.929 446.451a.119.119 0 00.07.1.376.376 0 00.342 0 .121.121 0 00.071-.1v-4.815h-.483z"
          transform="translate(-41.789 -384.318)"
          fill="url(#prefix__d)"
        />
        <Path
          d="M97.721 460.9a.121.121 0 01-.071.1.382.382 0 01-.31.015l1.413.822.345-.2-1.376-.8z"
          transform="translate(-42.099 -398.763)"
          opacity={0.43}
          fill="url(#prefix__e)"
          style={{
            mixBlendMode: "multiply",
            isolation: "isolate",
          }}
        />
        <Path
          d="M94.3 439.553l-1.86-3.289-1.661 3.289c-.2.367-.055.785.447 1.077a2.868 2.868 0 002.6 0c.5-.291.658-.709.459-1.077z"
          transform="translate(-37.094 -380.276)"
          fill="url(#prefix__B)"
        />
        <Path
          d="M94.991 436.647l-1.523-2.692-1.36 2.692c-.166.3-.045.643.366.882a2.349 2.349 0 002.131 0c.413-.239.538-.581.376-.882z"
          transform="translate(-38.109 -378.538)"
          fill="url(#prefix__B)"
        />
        <Path
          d="M95.743 434.26l-1.157-2.046-1.033 2.046c-.126.229-.034.489.278.67a1.784 1.784 0 001.62 0c.314-.181.409-.441.286-.67z"
          transform="translate(-39.209 -377.228)"
          fill="url(#prefix__B)"
        />
        <Path
          d="M95.947 442.438a1.784 1.784 0 01-1.62 0 .9.9 0 01-.17-.126.747.747 0 00.264.24 1.785 1.785 0 001.62 0 .778.778 0 00.254-.222l-.078-.138a.75.75 0 01-.27.246z"
          transform="translate(-39.704 -384.736)"
          opacity={0.57}
          fill="url(#prefix__b)"
          style={{
            mixBlendMode: "multiply",
            isolation: "isolate",
          }}
        />
        <Path
          d="M95.206 447.4a2.349 2.349 0 01-2.131 0 1.136 1.136 0 01-.241-.183 1 1 0 00.335.3 2.348 2.348 0 002.131 0 1.014 1.014 0 00.342-.3l-.079-.139a.986.986 0 01-.357.322z"
          transform="translate(-38.708 -388.406)"
          opacity={0.57}
          fill="url(#prefix__C)"
          style={{
            mixBlendMode: "multiply",
            isolation: "isolate",
          }}
        />
      </G>
      <G>
        <Path
          d="M59.907 37.784l.061 21.615 6.737 3.915-.061-21.615z"
          fill="#e5dbd1"
        />
      </G>
      <G>
        <Path
          d="M66.644 41.694l.061 21.615 6.782-3.915-.061-21.615z"
          fill="#b1aca1"
        />
      </G>
      <G
        style={{
          mixBlendMode: "multiply",
          isolation: "isolate",
        }}
      >
        <Path
          d="M143.406 366.61l.061 21.615 6.782-3.915-.061-21.615z"
          transform="translate(-76.762 -324.916)"
          fill="url(#prefix__D)"
        />
      </G>
      <G
        style={{
          mixBlendMode: "multiply",
          isolation: "isolate",
        }}
      >
        <Path
          d="M143.406 366.61l.061 21.615 6.782-3.915-.061-21.615z"
          transform="translate(-76.762 -324.916)"
          fill="url(#prefix__D)"
        />
      </G>
      <G>
        <Path
          d="M59.907 37.779l6.737 3.915 6.782-3.915-6.737-3.915z"
          fill="#d5cdc5"
        />
      </G>
      <Path
        d="M116.189 350.793l2.265 1.316 6.782-3.915-2.265-1.316z"
        transform="translate(-56.281 -313.014)"
        opacity={0.3}
        fill="url(#prefix__E)"
        style={{
          mixBlendMode: "multiply",
          isolation: "isolate",
        }}
      />
      <Path
        d="M59.907 37.779l6.737 3.915 6.782-3.915-6.737-3.915zm6.738 2.906l-5-2.9 5.039-2.909 5 2.9z"
        fill="#faefe4"
      />
      <Path d="M61.649 37.782l.377.219 4.662-2.692v-.436z" fill="#b1aca1" />
      <Path d="M66.69 35.31l4.618 2.684.377-.217-4.995-2.9z" fill="#e5dbd1" />
      <G transform="translate(73.862 54.578)">
        <Path
          d="M180.045 455.539a.571.571 0 00-.041-.088.608.608 0 00-.057-.087.807.807 0 00-.072-.08c-.027-.024-.055-.047-.083-.068s-.06-.037-.089-.053-.06-.026-.088-.038a.684.684 0 00-.082-.024.581.581 0 00-.125-.018h-.048s.014.011.04.027l.046.027c.018.009.037.023.058.036l.067.042c.023.016.046.034.071.049s.047.038.072.056l.069.061c.021.023.045.043.064.066a.838.838 0 01.058.068c.019.023.034.046.051.068s.03.044.042.065a1.394 1.394 0 01.078.148.256.256 0 00.006-.048.5.5 0 00-.012-.127.56.56 0 00-.025-.082z"
          transform="translate(-177.679 -449.013)"
          fill="url(#prefix__F)"
        />
        <Path
          d="M182.231 454.177a.619.619 0 00-.181.3.6.6 0 00-.021.091.568.568 0 00-.011.09.8.8 0 000 .084.3.3 0 00.006.075.658.658 0 00.022.11c.007.026.013.041.013.041l.014-.041c.008-.026.017-.063.028-.106l.017-.069.019-.076.02-.08c.007-.027.014-.054.023-.081l.025-.08.027-.075c.008-.024.019-.048.03-.069s.02-.043.03-.061a.933.933 0 01.055-.09.422.422 0 01.026-.034.185.185 0 00-.042.013.359.359 0 00-.1.058z"
          transform="translate(-179.677 -448.275)"
          fill="url(#prefix__G)"
        />
        <Path
          d="M181.511 454.108a.781.781 0 00-.055-.116.573.573 0 00-.021.128 1.133 1.133 0 00.1.536.608.608 0 00.066.111.725.725 0 00.009-.129 1.408 1.408 0 00-.028-.27 1.448 1.448 0 00-.071-.26z"
          transform="translate(-179.238 -448.192)"
          fill="url(#prefix__H)"
        />
        <Path
          d="M180.171 455.912a.439.439 0 00-.032-.069.444.444 0 00-.045-.069.63.63 0 00-.057-.063c-.021-.019-.043-.037-.066-.054s-.047-.029-.07-.042-.047-.021-.07-.03a.486.486 0 00-.065-.019.444.444 0 00-.1-.014h-.038l.032.021.036.022c.014.007.029.018.046.028l.053.033c.018.013.036.027.056.039s.037.03.056.044l.055.048c.017.018.036.034.051.052s.032.035.046.054l.04.054a.375.375 0 01.033.052 1.132 1.132 0 01.062.117.226.226 0 000-.038.386.386 0 00-.01-.1.418.418 0 00-.013-.066z"
          transform="translate(-177.882 -449.366)"
          fill="url(#prefix__I)"
        />
        <Path
          d="M181.9 454.835a.488.488 0 00-.143.234.5.5 0 00-.017.072.438.438 0 00-.009.071.659.659 0 000 .066v.059a.515.515 0 00.018.087l.01.032s0-.012.011-.032.013-.049.022-.084c0-.017.009-.035.014-.054s.011-.039.015-.06.01-.042.016-.063.011-.043.018-.064l.02-.063.022-.06c.007-.02.015-.038.024-.055s.015-.034.024-.049a.77.77 0 01.043-.071l.02-.026a.149.149 0 00-.033.01.286.286 0 00-.075.05z"
          transform="translate(-179.46 -448.782)"
          fill="url(#prefix__J)"
        />
        <Path
          d="M181.329 454.781a.6.6 0 00-.044-.092.474.474 0 00-.016.1.893.893 0 00.081.423.479.479 0 00.052.088.581.581 0 00.007-.1 1.221 1.221 0 00-.081-.419z"
          transform="translate(-179.114 -448.717)"
          fill="url(#prefix__K)"
        />
        <Path
          d="M182.21 453.993c-.01-.032-.023-.061-.034-.089a.692.692 0 00-.04-.075.564.564 0 00-.074-.1.758.758 0 00-.032-.035s0 .018.009.047.007.032.012.052l.014.066.016.077c0 .027.008.056.014.085s0 .06.01.09v.185a.882.882 0 01-.009.089c0 .029-.009.057-.014.084s-.011.052-.018.075a1.456 1.456 0 01-.052.159.284.284 0 00.038-.029.5.5 0 00.083-.1.531.531 0 00.043-.075.555.555 0 00.034-.091.6.6 0 00.023-.1.853.853 0 00.008-.107c0-.036 0-.072-.009-.107s-.014-.069-.022-.101z"
          transform="translate(-179.675 -447.966)"
          fill="url(#prefix__L)"
        />
        <Path
          d="M182.933 455.745a.619.619 0 00-.339.076.869.869 0 00-.152.1.825.825 0 00-.062.057l-.049.057a.652.652 0 00-.064.093l-.021.038.039-.018c.025-.012.056-.032.1-.054l.062-.036c.021-.014.045-.025.068-.039l.072-.041c.025-.014.049-.028.074-.04l.074-.037c.024-.012.05-.022.073-.033s.048-.02.07-.027.045-.016.065-.021a.887.887 0 01.1-.024c.026 0 .042-.005.042-.005a.189.189 0 00-.038-.021.357.357 0 00-.114-.025z"
          transform="translate(-179.851 -449.509)"
          fill="url(#prefix__s)"
        />
        <Path
          d="M182.7 454.764a1.058 1.058 0 00-.129.243.593.593 0 00-.034.125.723.723 0 00.1-.083 1.425 1.425 0 00.175-.208 1.467 1.467 0 00.135-.235.777.777 0 00.045-.121.572.572 0 00-.106.074 1.07 1.07 0 00-.186.205z"
          transform="translate(-180.067 -448.564)"
          fill="url(#prefix__G)"
        />
        <G>
          <Path
            d="M178.982 455.441a.594.594 0 00-.041-.088.621.621 0 00-.057-.087.814.814 0 00-.072-.08c-.027-.024-.055-.047-.083-.068s-.06-.037-.089-.053-.06-.027-.088-.038a.722.722 0 00-.082-.024.568.568 0 00-.125-.018h-.045l.04.027.046.028c.018.009.037.023.058.036l.067.042c.023.016.046.034.071.049s.046.038.072.056l.069.061c.021.023.045.043.064.066a.9.9 0 01.058.069c.019.023.034.046.051.068s.03.044.042.065a1.455 1.455 0 01.078.148.282.282 0 00.006-.048.488.488 0 00-.012-.127.547.547 0 00-.028-.084z"
            transform="translate(-176.879 -448.94)"
            fill="url(#prefix__n)"
          />
          <Path
            d="M181.169 454.078a.617.617 0 00-.181.3.592.592 0 00-.021.091.573.573 0 00-.011.09.747.747 0 000 .084.3.3 0 00.006.075.672.672 0 00.022.11c.007.026.013.041.013.041l.014-.041c.008-.026.017-.063.028-.106l.017-.069.019-.076c.006-.027.013-.053.021-.08s.014-.055.023-.081l.025-.079.027-.076c.008-.025.019-.048.03-.069s.02-.043.03-.061a.874.874 0 01.055-.09.4.4 0 01.025-.034.2.2 0 00-.042.013.355.355 0 00-.1.058z"
            transform="translate(-178.877 -448.202)"
            fill="url(#prefix__M)"
          />
          <Path
            d="M180.448 454.009a.776.776 0 00-.055-.116.576.576 0 00-.021.128 1.133 1.133 0 00.1.535.616.616 0 00.066.112.724.724 0 00.009-.129 1.407 1.407 0 00-.028-.27 1.438 1.438 0 00-.071-.26z"
            transform="translate(-178.438 -448.119)"
            fill="url(#prefix__N)"
          />
          <Path
            d="M179.109 455.814a.464.464 0 00-.032-.069.48.48 0 00-.045-.069.59.59 0 00-.057-.063c-.021-.019-.043-.037-.066-.054s-.047-.029-.07-.042-.048-.021-.07-.03a.545.545 0 00-.065-.018.452.452 0 00-.1-.014h-.038l.032.021.036.022c.014.007.029.018.046.028l.052.033.056.039c.02.013.037.03.056.044l.055.049c.017.018.036.034.051.052s.033.035.046.054l.04.054a.375.375 0 01.033.052 1.146 1.146 0 01.062.117.235.235 0 000-.038.384.384 0 00-.01-.1.417.417 0 00-.012-.068z"
            transform="translate(-177.083 -449.293)"
            fill="url(#prefix__B)"
          />
          <Path
            d="M180.836 454.737a.486.486 0 00-.143.234.445.445 0 00-.017.072.437.437 0 00-.009.071.6.6 0 000 .066v.059a.512.512 0 00.018.087l.01.032s0-.012.011-.032.013-.049.022-.083c0-.017.009-.035.014-.055l.015-.06.016-.063c.006-.021.011-.043.018-.064l.02-.063.022-.06c.007-.02.015-.038.023-.055l.024-.049a.719.719 0 01.043-.071l.02-.026a.14.14 0 00-.033.01.293.293 0 00-.074.05z"
            transform="translate(-178.661 -448.709)"
            fill="url(#prefix__O)"
          />
          <Path
            d="M180.267 454.683a.6.6 0 00-.044-.092.455.455 0 00-.016.1.893.893 0 00.081.423.47.47 0 00.052.088.578.578 0 00.007-.1 1.13 1.13 0 00-.022-.213 1.148 1.148 0 00-.058-.206z"
            transform="translate(-178.314 -448.644)"
            fill="url(#prefix__P)"
          />
          <Path
            d="M181.147 453.895c-.01-.032-.023-.062-.034-.09a.7.7 0 00-.04-.075.554.554 0 00-.074-.1.758.758 0 00-.032-.035s0 .018.009.047.007.032.012.052l.014.066.016.077c0 .027.008.056.014.085s0 .06.01.09 0 .061 0 .093v.092a.861.861 0 01-.009.089c0 .029-.009.057-.014.084s-.011.052-.018.075a1.391 1.391 0 01-.052.159.271.271 0 00.039-.029.48.48 0 00.083-.1.546.546 0 00.043-.075.58.58 0 00.034-.091.6.6 0 00.023-.1.864.864 0 00.008-.107c0-.036 0-.072-.009-.107l-.023-.1z"
            transform="translate(-178.875 -447.893)"
            fill="url(#prefix__Q)"
          />
          <Path
            d="M181.871 455.646a.619.619 0 00-.339.076.659.659 0 00-.08.048.578.578 0 00-.072.054.84.84 0 00-.062.057c-.018.019-.034.039-.049.056a.659.659 0 00-.064.093c-.014.023-.021.038-.021.038l.039-.019c.024-.012.057-.032.1-.053l.062-.036.068-.039.072-.041c.025-.014.049-.028.074-.04l.074-.037.073-.033c.024-.011.048-.02.07-.027s.045-.016.065-.021a.9.9 0 01.1-.023l.042-.005a.19.19 0 00-.038-.021.365.365 0 00-.114-.027z"
            transform="translate(-179.051 -449.436)"
            fill="url(#prefix__R)"
          />
          <Path
            d="M181.636 454.666a1.071 1.071 0 00-.129.242.6.6 0 00-.034.125.74.74 0 00.1-.083 1.428 1.428 0 00.174-.207 1.452 1.452 0 00.135-.235.772.772 0 00.045-.121.588.588 0 00-.106.074 1.081 1.081 0 00-.185.205z"
            transform="translate(-179.268 -448.49)"
            fill="url(#prefix__S)"
          />
        </G>
        <Path
          d="M180.542 443.059a.119.119 0 00.07.1.377.377 0 00.342 0 .121.121 0 00.071-.1v-4.815h-.483z"
          transform="translate(-178.568 -436.343)"
          fill="url(#prefix__T)"
        />
        <Path
          d="M181.335 457.505a.122.122 0 01-.071.1.382.382 0 01-.31.015l1.413.821.344-.2-1.376-.8z"
          transform="translate(-178.878 -450.789)"
          opacity={0.43}
          fill="url(#prefix__U)"
          style={{
            mixBlendMode: "multiply",
            isolation: "isolate",
          }}
        />
        <Circle cx={2.225} cy={2.225} r={2.225} fill="url(#prefix__f)" />
      </G>
      <G>
        <Path
          d="M170.831 460.728a.564.564 0 00-.041-.088.616.616 0 00-.057-.087.816.816 0 00-.072-.08c-.027-.024-.055-.047-.083-.068s-.06-.037-.089-.053-.06-.026-.088-.038a.706.706 0 00-.082-.024.581.581 0 00-.125-.018h-.048l.04.027c.013.008.028.018.046.027s.037.023.058.036l.067.042c.023.016.046.034.071.049s.046.038.071.056l.07.061c.021.023.045.043.064.066a.816.816 0 01.058.068c.019.023.034.046.051.068s.03.044.042.065a1.435 1.435 0 01.078.148.278.278 0 00.006-.048.488.488 0 00-.012-.127.569.569 0 00-.025-.082z"
          transform="translate(-96.883 -398.34)"
          fill="url(#prefix__V)"
        />
        <Path
          d="M173.018 459.366a.621.621 0 00-.181.3.632.632 0 00-.021.091.565.565 0 00-.011.09.8.8 0 000 .084.3.3 0 00.006.075.687.687 0 00.022.11c.007.026.013.041.013.041l.014-.041c.008-.026.017-.063.028-.106l.017-.069.019-.076.02-.08c.007-.027.014-.054.023-.081l.025-.079c.008-.026.019-.05.027-.075s.019-.048.03-.069.02-.043.03-.061a.915.915 0 01.054-.09.4.4 0 01.026-.033.19.19 0 00-.042.013.361.361 0 00-.099.056z"
          transform="translate(-98.881 -397.602)"
          fill="url(#prefix__W)"
        />
        <Path
          d="M172.3 459.3a.769.769 0 00-.055-.116.592.592 0 00-.021.128 1.084 1.084 0 00.019.274 1.069 1.069 0 00.084.261.594.594 0 00.066.111.752.752 0 00.009-.129 1.427 1.427 0 00-.028-.27 1.467 1.467 0 00-.074-.259z"
          transform="translate(-98.442 -397.52)"
          fill="url(#prefix__X)"
        />
        <Path
          d="M170.958 461.1a.473.473 0 00-.032-.069.5.5 0 00-.045-.069.646.646 0 00-.057-.063c-.021-.019-.043-.037-.066-.054s-.047-.029-.07-.042-.047-.021-.069-.03a.566.566 0 00-.065-.019.451.451 0 00-.1-.014h-.038l.032.021.036.022c.014.007.029.018.046.028l.052.033.056.039c.02.013.037.03.057.044l.055.049c.017.018.035.034.051.052s.033.035.046.054l.04.054a.375.375 0 01.033.052 1.139 1.139 0 01.062.117.2.2 0 000-.038.4.4 0 00-.01-.1.486.486 0 00-.014-.067z"
          transform="translate(-97.086 -398.693)"
          fill="url(#prefix__Y)"
        />
        <Path
          d="M172.685 460.024a.489.489 0 00-.143.234.5.5 0 00-.017.072.44.44 0 00-.008.071.538.538 0 000 .066v.059a.534.534 0 00.017.087l.01.032s0-.012.011-.032.013-.049.022-.084c0-.017.01-.035.014-.055l.015-.06.016-.063c.005-.021.011-.043.018-.064l.02-.063.022-.06c.007-.02.015-.038.024-.055l.023-.049a.747.747 0 01.043-.071.329.329 0 01.02-.027.154.154 0 00-.033.01.282.282 0 00-.074.052z"
          transform="translate(-98.665 -398.109)"
          fill="url(#prefix__R)"
        />
        <Path
          d="M172.115 459.97a.622.622 0 00-.044-.092.458.458 0 00-.016.1.858.858 0 00.015.217.839.839 0 00.067.206.477.477 0 00.052.088.583.583 0 00.007-.1 1.114 1.114 0 00-.022-.213 1.135 1.135 0 00-.059-.206z"
          transform="translate(-98.318 -398.044)"
          fill="url(#prefix__Z)"
        />
        <Path
          d="M173 459.182c-.01-.032-.023-.061-.034-.089a.68.68 0 00-.04-.075.572.572 0 00-.075-.1.758.758 0 00-.032-.035s0 .018.009.047.007.032.012.052l.014.067.016.077c0 .027.008.056.014.085s0 .06.009.09 0 .062 0 .093v.092a.875.875 0 01-.009.09c0 .029-.01.057-.014.084s-.011.052-.018.075a1.458 1.458 0 01-.052.159.3.3 0 00.039-.029.49.49 0 00.083-.1.545.545 0 00.043-.075.58.58 0 00.035-.09.628.628 0 00.023-.1.767.767 0 00.008-.107c0-.036 0-.072-.009-.107s-.022-.072-.022-.104z"
          transform="translate(-98.879 -397.293)"
          fill="url(#prefix__aa)"
        />
        <Path
          d="M173.719 460.933a.617.617 0 00-.339.076.845.845 0 00-.152.1.751.751 0 00-.061.057l-.049.057a.662.662 0 00-.064.093c-.014.023-.021.038-.021.038l.039-.019c.025-.012.056-.032.1-.053l.062-.036c.021-.014.045-.025.068-.039l.072-.041c.025-.014.049-.028.074-.04l.075-.037.073-.033c.024-.011.048-.02.07-.027s.044-.016.065-.021a.9.9 0 01.1-.024c.026 0 .042-.005.042-.005a.187.187 0 00-.038-.021.358.358 0 00-.116-.025z"
          transform="translate(-99.055 -398.836)"
          fill="url(#prefix__B)"
        />
        <Path
          d="M173.485 459.953a1.072 1.072 0 00-.129.243.615.615 0 00-.034.125.7.7 0 00.1-.083 1.423 1.423 0 00.174-.208 1.446 1.446 0 00.135-.235.811.811 0 00.045-.121.568.568 0 00-.106.074 1.072 1.072 0 00-.185.205z"
          transform="translate(-99.271 -397.891)"
          fill="url(#prefix__ab)"
        />
        <G>
          <Path
            d="M169.769 460.63a.568.568 0 00-.041-.088.6.6 0 00-.057-.087.815.815 0 00-.072-.08c-.027-.024-.055-.047-.083-.068s-.06-.037-.088-.053-.06-.027-.088-.038a.725.725 0 00-.082-.023.567.567 0 00-.125-.018h-.048l.04.027c.013.008.028.018.046.027s.037.023.058.036l.067.042c.023.016.046.034.071.049s.046.038.072.056l.069.062c.021.023.045.043.064.066a.869.869 0 01.058.069c.019.023.034.046.051.068s.03.044.042.065a1.439 1.439 0 01.078.148.278.278 0 00.006-.048.481.481 0 00-.012-.127.551.551 0 00-.026-.085z"
            transform="translate(-96.084 -398.267)"
            fill="url(#prefix__S)"
          />
          <Path
            d="M171.956 459.267a.617.617 0 00-.181.3.6.6 0 00-.021.091.57.57 0 00-.011.089.747.747 0 000 .084.3.3 0 00.006.075.679.679 0 00.022.11c.007.027.013.041.013.041l.014-.041c.008-.026.017-.063.028-.106l.017-.069.019-.076.02-.08c.007-.027.014-.054.023-.081l.025-.079c.009-.026.019-.05.027-.076s.019-.048.03-.069l.03-.062a.934.934 0 01.055-.09c.015-.022.026-.034.026-.034a.194.194 0 00-.042.013.358.358 0 00-.1.06z"
            transform="translate(-98.082 -397.529)"
            fill="url(#prefix__ac)"
          />
          <Path
            d="M171.235 459.2a.771.771 0 00-.055-.116.592.592 0 00-.021.128 1.082 1.082 0 00.019.274 1.063 1.063 0 00.084.261.61.61 0 00.066.112.724.724 0 00.009-.129 1.41 1.41 0 00-.027-.27 1.454 1.454 0 00-.075-.26z"
            transform="translate(-97.643 -397.446)"
            fill="url(#prefix__ad)"
          />
          <Path
            d="M169.9 461a.421.421 0 00-.032-.069.475.475 0 00-.045-.069.65.65 0 00-.057-.063c-.021-.019-.043-.037-.066-.054s-.047-.029-.07-.042-.047-.021-.069-.03a.552.552 0 00-.065-.018.449.449 0 00-.1-.014h-.038l.032.021.036.021c.014.007.029.018.046.029l.053.033.056.039c.02.013.037.03.056.044l.055.049c.017.018.035.034.051.052a.7.7 0 01.046.054c.015.018.027.037.04.054s.024.035.033.052a1.147 1.147 0 01.062.117.2.2 0 000-.038.372.372 0 00-.01-.1.427.427 0 00-.014-.068z"
            transform="translate(-96.287 -398.62)"
            fill="url(#prefix__ae)"
          />
          <Path
            d="M171.623 459.926a.487.487 0 00-.143.234.5.5 0 00-.017.072.465.465 0 00-.009.07v.066c0 .021 0 .041.005.059a.514.514 0 00.017.087l.01.032s0-.012.011-.032.013-.049.022-.083c0-.017.01-.035.014-.055s.011-.039.015-.06.01-.042.016-.063.011-.043.018-.064l.02-.063.022-.06c.007-.02.015-.038.023-.055l.024-.049a.71.71 0 01.043-.071.285.285 0 01.02-.026.143.143 0 00-.033.01.291.291 0 00-.078.051z"
            transform="translate(-97.865 -398.036)"
            fill="url(#prefix__z)"
          />
          <Path
            d="M171.053 459.872a.611.611 0 00-.044-.092.461.461 0 00-.016.1.893.893 0 00.081.423.468.468 0 00.052.088.577.577 0 00.007-.1 1.2 1.2 0 00-.081-.419z"
            transform="translate(-97.519 -397.971)"
            fill="url(#prefix__af)"
          />
          <Path
            d="M171.934 459.084c-.01-.032-.023-.062-.034-.09a.7.7 0 00-.04-.075.56.56 0 00-.075-.1.758.758 0 00-.032-.035s0 .018.009.047.007.032.012.052l.014.067.016.077c0 .027.008.056.014.085s0 .06.01.09v.184c0 .03 0 .061-.008.089s-.01.057-.014.084-.011.052-.018.076a1.439 1.439 0 01-.052.159.281.281 0 00.039-.03.494.494 0 00.083-.1.543.543 0 00.043-.075.582.582 0 00.035-.091.629.629 0 00.023-.1.77.77 0 00.008-.108c0-.036 0-.072-.009-.107l-.024-.099z"
            transform="translate(-98.08 -397.22)"
            fill="url(#prefix__y)"
          />
          <Path
            d="M172.657 460.835a.694.694 0 00-.419.124.571.571 0 00-.072.054.825.825 0 00-.061.057 1.088 1.088 0 00-.049.056.687.687 0 00-.064.093l-.021.038.039-.019c.025-.012.056-.032.1-.053l.062-.036c.021-.014.045-.025.068-.039l.072-.041c.025-.014.049-.028.074-.04l.075-.038c.025-.013.049-.021.073-.033s.048-.02.07-.027.044-.016.065-.021a.92.92 0 01.1-.023l.042-.005a.193.193 0 00-.038-.021.364.364 0 00-.116-.026z"
            transform="translate(-98.256 -398.763)"
            fill="url(#prefix__a)"
          />
          <Path
            d="M172.422 459.855a1.076 1.076 0 00-.129.242.614.614 0 00-.034.125.739.739 0 00.1-.083 1.417 1.417 0 00.174-.207 1.457 1.457 0 00.135-.235.782.782 0 00.045-.121.592.592 0 00-.106.074 1.082 1.082 0 00-.185.205z"
            transform="translate(-98.472 -397.817)"
            fill="url(#prefix__ag)"
          />
        </G>
        <Path
          d="M171.329 448.248a.119.119 0 00.07.1.376.376 0 00.342 0 .121.121 0 00.071-.1v-4.815h-.483z"
          transform="translate(-97.773 -385.67)"
          fill="url(#prefix__ah)"
        />
        <Path
          d="M172.121 462.694a.121.121 0 01-.071.1.38.38 0 01-.31.015l1.413.822.345-.2-1.376-.8z"
          transform="translate(-98.082 -400.116)"
          opacity={0.43}
          fill="url(#prefix__U)"
          style={{
            mixBlendMode: "multiply",
            isolation: "isolate",
          }}
        />
        <Path
          d="M166.67 437.2a1.866 1.866 0 101.866 1.866 1.866 1.866 0 00-1.866-1.866z"
          transform="translate(-92.863 -380.982)"
          fill="url(#prefix__ai)"
        />
      </G>
      <G>
        <Path
          d="M160.769 465.7a.571.571 0 00-.041-.088.6.6 0 00-.057-.087.8.8 0 00-.072-.08c-.027-.024-.055-.047-.083-.068s-.06-.037-.089-.053-.06-.027-.088-.038a.718.718 0 00-.082-.023.568.568 0 00-.125-.018h-.048l.04.027.046.028c.018.009.037.023.058.036l.067.042c.022.016.046.033.071.049s.047.038.072.056l.069.061c.021.022.045.043.064.066a.845.845 0 01.058.069c.019.023.034.046.051.068s.03.044.042.065a1.45 1.45 0 01.078.148.289.289 0 00.006-.048.488.488 0 00-.012-.127.538.538 0 00-.025-.085z"
          transform="translate(-89.312 -402.084)"
          fill="url(#prefix__S)"
        />
        <Path
          d="M162.955 464.34a.617.617 0 00-.181.3.6.6 0 00-.021.091.572.572 0 00-.011.089.807.807 0 000 .084.3.3 0 00.006.075.672.672 0 00.022.11c.007.026.013.041.013.041l.014-.041c.008-.026.017-.063.028-.106l.017-.069.019-.076.02-.08c.007-.027.014-.054.023-.081l.025-.079.027-.076c.008-.025.019-.048.029-.069l.03-.062a.945.945 0 01.055-.09l.025-.034a.2.2 0 00-.042.013.357.357 0 00-.098.06z"
          transform="translate(-91.31 -401.345)"
          fill="url(#prefix__n)"
        />
        <Path
          d="M162.235 464.271a.8.8 0 00-.055-.116.576.576 0 00-.021.128 1.133 1.133 0 00.1.536.612.612 0 00.066.112.721.721 0 00.009-.129 1.532 1.532 0 00-.1-.53z"
          transform="translate(-90.871 -401.263)"
          fill="url(#prefix__aj)"
        />
        <Path
          d="M160.9 466.075a.442.442 0 00-.032-.069.452.452 0 00-.045-.069.617.617 0 00-.056-.063c-.022-.019-.043-.037-.066-.054s-.047-.029-.07-.042-.047-.021-.07-.03a.546.546 0 00-.065-.018.448.448 0 00-.1-.014h-.038l.032.021.036.022c.014.007.029.018.046.028l.053.033.056.039c.02.013.037.03.056.044l.055.049c.017.018.036.034.051.052a.7.7 0 01.046.054c.015.018.027.037.04.054s.024.035.033.052a1.132 1.132 0 01.062.117.207.207 0 000-.038.385.385 0 00-.01-.1.417.417 0 00-.014-.068z"
          transform="translate(-89.515 -402.436)"
          fill="url(#prefix__n)"
        />
        <Path
          d="M162.623 465a.487.487 0 00-.143.234.5.5 0 00-.017.072.436.436 0 00-.009.071v.125a.515.515 0 00.018.087l.01.032s0-.012.011-.032.013-.049.022-.083c0-.017.009-.035.014-.055s.011-.039.015-.06.01-.042.016-.063.011-.043.018-.064l.02-.063.022-.06c.007-.02.015-.038.024-.055l.023-.049a.691.691 0 01.043-.071.3.3 0 01.02-.026.144.144 0 00-.033.01.282.282 0 00-.074.05z"
          transform="translate(-91.093 -401.853)"
          fill="url(#prefix__ak)"
        />
        <Path
          d="M162.053 464.945a.618.618 0 00-.044-.092.462.462 0 00-.016.1.893.893 0 00.081.423.464.464 0 00.052.088.58.58 0 00.007-.1 1.141 1.141 0 00-.022-.213 1.167 1.167 0 00-.058-.206z"
          transform="translate(-90.747 -401.788)"
          fill="url(#prefix__al)"
        />
        <Path
          d="M162.934 464.156c-.01-.032-.023-.062-.034-.09a.712.712 0 00-.04-.075.564.564 0 00-.074-.1.758.758 0 00-.032-.035s0 .018.009.048.007.032.012.052l.014.067.016.077c0 .027.008.056.014.085s0 .06.01.09 0 .061 0 .092v.092a.862.862 0 01-.009.089c0 .029-.009.057-.014.084s-.011.052-.018.075a1.435 1.435 0 01-.052.159.266.266 0 00.038-.029.5.5 0 00.083-.1.6.6 0 00.077-.166.607.607 0 00.023-.1.812.812 0 00.008-.107c0-.036 0-.072-.009-.107s-.014-.069-.022-.101z"
          transform="translate(-91.308 -401.036)"
          fill="url(#prefix__am)"
        />
        <Path
          d="M163.657 465.908a.618.618 0 00-.338.076.609.609 0 00-.08.048.579.579 0 00-.072.054.826.826 0 00-.061.057l-.05.056a.683.683 0 00-.064.093l-.021.038.039-.019c.024-.012.056-.032.1-.053l.062-.036c.021-.014.045-.025.068-.039l.072-.041c.025-.014.049-.028.074-.04l.074-.037c.024-.012.05-.021.073-.033s.048-.02.071-.027.044-.016.065-.021a.923.923 0 01.1-.023c.026 0 .042-.005.042-.005a.2.2 0 00-.038-.021.36.36 0 00-.116-.027z"
          transform="translate(-91.484 -402.579)"
          fill="url(#prefix__S)"
        />
        <Path
          d="M163.422 464.928a1.077 1.077 0 00-.129.242.613.613 0 00-.034.125.737.737 0 00.1-.083 1.417 1.417 0 00.175-.207 1.446 1.446 0 00.135-.235.764.764 0 00.045-.121.584.584 0 00-.106.074 1.078 1.078 0 00-.186.205z"
          transform="translate(-91.7 -401.634)"
          fill="url(#prefix__n)"
        />
        <G>
          <Path
            d="M159.707 465.605a.574.574 0 00-.041-.088.645.645 0 00-.057-.087.822.822 0 00-.072-.08c-.027-.024-.055-.047-.083-.068s-.06-.037-.089-.053-.06-.026-.088-.038a.679.679 0 00-.082-.024.576.576 0 00-.125-.018h-.048l.04.027.046.028c.018.009.037.023.058.036l.067.042c.023.016.046.034.071.049s.047.038.072.056l.069.061c.021.023.045.043.064.066a.876.876 0 01.058.068c.019.023.034.047.051.068s.03.044.042.066a1.431 1.431 0 01.078.148.252.252 0 00.006-.048.49.49 0 00-.012-.127.554.554 0 00-.025-.084z"
            transform="translate(-88.513 -402.01)"
            fill="url(#prefix__an)"
          />
          <Path
            d="M161.893 464.242a.619.619 0 00-.181.3.611.611 0 00-.021.091.569.569 0 00-.011.09.746.746 0 000 .084c0 .026 0 .052.006.075a.66.66 0 00.022.11c.007.026.013.041.013.041l.014-.041c.008-.026.017-.063.028-.106.006-.021.012-.044.017-.069s.013-.049.019-.076.013-.053.021-.08.014-.054.023-.081l.025-.08c.009-.026.019-.05.027-.076s.019-.048.03-.069l.03-.062a.892.892 0 01.055-.09c.015-.022.026-.034.026-.034a.18.18 0 00-.042.013.364.364 0 00-.101.06z"
            transform="translate(-90.51 -401.271)"
            fill="url(#prefix__ao)"
          />
          <Path
            d="M161.172 464.173a.782.782 0 00-.055-.116.575.575 0 00-.021.128 1.133 1.133 0 00.1.536.615.615 0 00.066.112.726.726 0 00.009-.129 1.411 1.411 0 00-.028-.27 1.449 1.449 0 00-.071-.261z"
            transform="translate(-90.072 -401.188)"
            fill="url(#prefix__ap)"
          />
          <Path
            d="M159.833 465.977a.455.455 0 00-.032-.069.5.5 0 00-.045-.069.633.633 0 00-.057-.063c-.021-.019-.043-.037-.066-.054s-.047-.029-.07-.042-.048-.021-.07-.03a.529.529 0 00-.065-.019.447.447 0 00-.1-.014h-.038l.032.021.036.022c.014.007.029.018.046.029l.053.033c.018.013.036.027.056.039s.037.03.056.044l.055.049c.017.018.036.034.051.052s.033.035.046.054l.04.054a.375.375 0 01.033.052 1.13 1.13 0 01.062.117.232.232 0 000-.038.381.381 0 00-.01-.1.419.419 0 00-.013-.068z"
            transform="translate(-88.716 -402.362)"
            fill="url(#prefix__aq)"
          />
          <Path
            d="M161.56 464.9a.49.49 0 00-.143.234.673.673 0 00-.025.143.6.6 0 000 .066v.059a.511.511 0 00.018.087l.01.032s0-.012.011-.032.013-.05.022-.083c0-.017.009-.035.014-.055l.015-.06.016-.063c.006-.021.011-.043.018-.064l.02-.063.022-.06c.007-.02.015-.038.023-.054l.024-.049a.7.7 0 01.043-.071l.02-.027a.15.15 0 00-.033.01.285.285 0 00-.075.05z"
            transform="translate(-90.294 -401.778)"
            fill="url(#prefix__ar)"
          />
          <Path
            d="M160.991 464.847a.588.588 0 00-.044-.092.465.465 0 00-.016.1.893.893 0 00.081.423.481.481 0 00.052.088.579.579 0 00.007-.1 1.121 1.121 0 00-.022-.213 1.141 1.141 0 00-.058-.206z"
            transform="translate(-89.948 -401.714)"
            fill="url(#prefix__as)"
          />
          <Path
            d="M161.872 464.058c-.01-.032-.023-.062-.034-.09a.687.687 0 00-.04-.075.569.569 0 00-.074-.1.758.758 0 00-.032-.035s0 .018.009.047.007.032.012.052l.014.066.016.077c0 .028.008.056.014.085s0 .06.01.09v.185a.879.879 0 01-.009.089c0 .029-.009.057-.014.084s-.011.052-.018.076a1.455 1.455 0 01-.052.159.284.284 0 00.038-.03.482.482 0 00.083-.1.511.511 0 00.043-.075.6.6 0 00.034-.09.618.618 0 00.023-.1.87.87 0 00.008-.107c0-.036 0-.072-.009-.107s-.014-.069-.022-.101z"
            transform="translate(-90.509 -400.962)"
            fill="url(#prefix__at)"
          />
          <Path
            d="M162.595 465.81a.62.62 0 00-.339.076.847.847 0 00-.152.1.819.819 0 00-.062.057l-.049.057a.655.655 0 00-.064.093l-.021.038.039-.018c.024-.012.057-.032.1-.054l.062-.036c.021-.014.045-.025.068-.039l.072-.041c.025-.014.049-.028.074-.04l.074-.037c.024-.012.05-.022.073-.033s.048-.02.07-.027l.065-.021a.928.928 0 01.1-.023l.042-.005a.189.189 0 00-.038-.021.359.359 0 00-.114-.026z"
            transform="translate(-90.685 -402.505)"
            fill="url(#prefix__S)"
          />
          <Path
            d="M162.36 464.829a1.057 1.057 0 00-.129.243.594.594 0 00-.034.125.721.721 0 00.1-.083 1.422 1.422 0 00.175-.208 1.457 1.457 0 00.135-.235.778.778 0 00.045-.121.589.589 0 00-.106.074 1.079 1.079 0 00-.186.205z"
            transform="translate(-90.901 -401.56)"
            fill="url(#prefix__R)"
          />
        </G>
        <Path
          d="M161.267 453.223a.118.118 0 00.07.1.376.376 0 00.342 0 .121.121 0 00.071-.1v-4.815h-.483z"
          transform="translate(-90.201 -389.413)"
          fill="url(#prefix__au)"
        />
        <Path
          d="M162.059 467.668a.121.121 0 01-.071.1.382.382 0 01-.31.015l1.413.821.344-.2-1.376-.8z"
          transform="translate(-90.511 -403.859)"
          opacity={0.43}
          fill="url(#prefix__av)"
          style={{
            mixBlendMode: "multiply",
            isolation: "isolate",
          }}
        />
        <Path
          d="M154.7 439.647a2.492 2.492 0 102.492 2.492 2.492 2.492 0 00-2.492-2.492z"
          transform="translate(-83.387 -382.821)"
          fill="url(#prefix__aw)"
        />
      </G>
      <G>
        <Path d="M60.656 54.612l1.14.658.008-2.982-1.14-.658z" fill="#65c5e5" />
        <Path
          d="M119.238 419.613l1.137 1.793.006-2.091-1.14-.658z"
          transform="translate(-58.576 -367.027)"
          opacity={0.3}
          fill="url(#prefix__ax)"
          style={{
            mixBlendMode: "overlay",
            isolation: "isolate",
          }}
        />
        <Path
          d="M60.656 54.612l.194-.111.008-2.759-.193-.112z"
          fill="#b1aca1"
        />
        <Path d="M60.656 54.612l1.14.658v-.224l-.947-.547z" fill="#faefe4" />
      </G>
      <G>
        <Path d="M64.743 56.978l1.14.658.008-2.981-1.14-.658z" fill="#65c5e5" />
        <Path
          d="M135.75 429.175l1.137 1.793.006-2.091-1.14-.658z"
          transform="translate(-71.001 -374.222)"
          opacity={0.3}
          fill="url(#prefix__ax)"
          style={{
            mixBlendMode: "overlay",
            isolation: "isolate",
          }}
        />
        <Path
          d="M64.743 56.978l.194-.111.008-2.759-.193-.112z"
          fill="#b1aca1"
        />
        <Path d="M64.743 56.979l1.14.658v-.223l-.947-.547z" fill="#faefe4" />
      </G>
      <G>
        <Path d="M60.656 50.651l1.14.658.008-2.982-1.14-.658z" fill="#65c5e5" />
        <Path
          d="M119.238 403.606l1.137 1.793.006-2.091-1.14-.658z"
          transform="translate(-58.576 -354.981)"
          opacity={0.3}
          fill="url(#prefix__ax)"
          style={{
            mixBlendMode: "overlay",
            isolation: "isolate",
          }}
        />
        <Path
          d="M60.656 50.651l.194-.111.008-2.759-.193-.112z"
          fill="#b1aca1"
        />
        <Path d="M60.656 50.651l1.14.658v-.222l-.947-.546z" fill="#faefe4" />
      </G>
      <G>
        <Path d="M64.743 53.018l1.14.658.008-2.982-1.14-.658z" fill="#65c5e5" />
        <Path
          d="M135.75 413.168l1.137 1.793.006-2.091-1.14-.658z"
          transform="translate(-71.001 -362.176)"
          opacity={0.3}
          fill="url(#prefix__ax)"
          style={{
            mixBlendMode: "overlay",
            isolation: "isolate",
          }}
        />
        <Path
          d="M64.743 53.018l.194-.111.008-2.759-.193-.112z"
          fill="#b1aca1"
        />
        <Path d="M64.743 53.017l1.14.658v-.222l-.947-.546z" fill="#faefe4" />
      </G>
      <G>
        <Path d="M60.656 46.688l1.14.658.008-2.981-1.14-.658z" fill="#65c5e5" />
        <Path
          d="M119.238 387.6l1.137 1.793.006-2.091-1.14-.658z"
          transform="translate(-58.576 -342.936)"
          opacity={0.3}
          fill="url(#prefix__ax)"
          style={{
            mixBlendMode: "overlay",
            isolation: "isolate",
          }}
        />
        <Path
          d="M60.656 46.688l.194-.111.008-2.759-.193-.112z"
          fill="#b1aca1"
        />
        <Path d="M60.656 46.688l1.14.658v-.222l-.947-.547z" fill="#faefe4" />
      </G>
      <G>
        <Path d="M64.743 49.054l1.14.658.008-2.981-1.14-.658z" fill="#65c5e5" />
        <Path
          d="M135.75 397.16l1.137 1.793.006-2.091-1.14-.658z"
          transform="translate(-71.001 -350.132)"
          opacity={0.3}
          fill="url(#prefix__ax)"
          style={{
            mixBlendMode: "overlay",
            isolation: "isolate",
          }}
        />
        <Path
          d="M64.743 49.054l.194-.111.008-2.759-.193-.112z"
          fill="#b1aca1"
        />
        <Path d="M64.743 49.055l1.14.658v-.222l-.947-.547z" fill="#faefe4" />
      </G>
      <G>
        <Path d="M60.656 42.726l1.14.658.008-2.981-1.14-.658z" fill="#65c5e5" />
        <Path
          d="M119.238 371.591l1.137 1.793.006-2.091-1.14-.658z"
          transform="translate(-58.576 -330.891)"
          opacity={0.3}
          fill="url(#prefix__ax)"
          style={{
            mixBlendMode: "overlay",
            isolation: "isolate",
          }}
        />
        <Path
          d="M60.656 42.726l.194-.111.008-2.759-.193-.112z"
          fill="#b1aca1"
        />
        <Path d="M60.656 42.726l1.14.658v-.222l-.947-.547z" fill="#faefe4" />
      </G>
      <G>
        <Path d="M64.743 45.093l1.14.658.008-2.982-1.14-.658z" fill="#65c5e5" />
        <Path
          d="M135.75 381.152l1.137 1.793.006-2.091-1.14-.658z"
          transform="translate(-71.001 -338.086)"
          opacity={0.3}
          fill="url(#prefix__ax)"
          style={{
            mixBlendMode: "overlay",
            isolation: "isolate",
          }}
        />
        <Path
          d="M64.743 45.092l.194-.111.008-2.759-.193-.112z"
          fill="#b1aca1"
        />
        <Path d="M64.743 45.092l1.14.658v-.222l-.947-.547z" fill="#faefe4" />
      </G>
      <G>
        <Path
          d="M71.586 52.338l.008 2.981 1.14-.658-.009-2.982z"
          fill="#65c5e5"
        />
        <Path
          d="M163.371 419.514l.006 2.091 1.137-1.793v-.955z"
          transform="translate(-91.785 -367.176)"
          opacity={0.3}
          fill="url(#prefix__ax)"
          style={{
            mixBlendMode: "overlay",
            isolation: "isolate",
          }}
        />
        <Path
          d="M72.537 51.791l.008 2.759.194.111-.008-2.982z"
          fill="#e5dbd1"
        />
        <Path d="M71.591 55.097v.222l1.14-.658-.194-.111z" fill="#faefe4" />
      </G>
      <G>
        <Path
          d="M67.499 54.705l.008 2.982 1.14-.658-.007-2.982z"
          fill="#65c5e5"
        />
        <Path
          d="M146.859 429.076l.006 2.091 1.135-1.794v-.955z"
          transform="translate(-79.36 -374.371)"
          opacity={0.3}
          fill="url(#prefix__ax)"
          style={{
            mixBlendMode: "overlay",
            isolation: "isolate",
          }}
        />
        <Path
          d="M68.446 54.158l.008 2.759.194.111-.008-2.981z"
          fill="#e5dbd1"
        />
        <Path d="M67.507 57.465v.222l1.14-.658-.194-.111z" fill="#faefe4" />
      </G>
      <G>
        <Path
          d="M71.641 48.029l.008 2.982 1.14-.658-.008-2.981z"
          fill="#65c5e5"
        />
        <Path
          d="M163.594 402.107l.006 2.091 1.137-1.793v-.955z"
          transform="translate(-91.953 -354.078)"
          opacity={0.3}
          fill="url(#prefix__ax)"
          style={{
            mixBlendMode: "overlay",
            isolation: "isolate",
          }}
        />
        <Path
          d="M72.587 47.483l.008 2.759.194.111-.008-2.981z"
          fill="#e5dbd1"
        />
        <Path d="M71.648 50.788v.223l1.14-.658-.194-.111z" fill="#faefe4" />
      </G>
      <G>
        <Path
          d="M67.554 50.396l.008 2.982 1.14-.658-.008-2.981z"
          fill="#65c5e5"
        />
        <Path
          d="M147.082 411.669l.006 2.091 1.137-1.793v-.955z"
          transform="translate(-79.528 -361.273)"
          opacity={0.3}
          fill="url(#prefix__ax)"
          style={{
            mixBlendMode: "overlay",
            isolation: "isolate",
          }}
        />
        <Path d="M68.5 49.849l.008 2.759.194.111-.008-2.981z" fill="#e5dbd1" />
        <Path d="M67.562 53.155v.222l1.14-.658-.194-.111z" fill="#faefe4" />
      </G>
      <G>
        <Path
          d="M71.641 44.067l.008 2.982 1.14-.658-.008-2.982z"
          fill="#65c5e5"
        />
        <Path
          d="M163.594 386.1l.006 2.09 1.137-1.793v-.956z"
          transform="translate(-91.953 -342.033)"
          opacity={0.3}
          fill="url(#prefix__ax)"
          style={{
            mixBlendMode: "overlay",
            isolation: "isolate",
          }}
        />
        <Path d="M72.587 43.52l.008 2.759.194.111-.008-2.982z" fill="#e5dbd1" />
        <Path d="M71.648 46.827v.222l1.14-.658-.194-.111z" fill="#faefe4" />
      </G>
      <G>
        <Path
          d="M67.554 46.435l.008 2.982 1.14-.658-.008-2.986z"
          fill="#65c5e5"
        />
        <Path
          d="M147.082 395.662l.006 2.091 1.137-1.793v-.955z"
          transform="translate(-79.528 -349.227)"
          opacity={0.3}
          fill="url(#prefix__ax)"
          style={{
            mixBlendMode: "overlay",
            isolation: "isolate",
          }}
        />
        <Path d="M68.5 45.888l.008 2.759.194.111-.008-2.985z" fill="#e5dbd1" />
        <Path d="M67.562 49.193v.222l1.14-.658-.194-.111z" fill="#faefe4" />
      </G>
      <G>
        <Path
          d="M71.641 40.105l.008 2.982 1.14-.658-.008-2.981z"
          fill="#65c5e5"
        />
        <Path
          d="M163.594 370.092l.006 2.091 1.137-1.793v-.955z"
          transform="translate(-91.953 -329.987)"
          opacity={0.3}
          fill="url(#prefix__ax)"
          style={{
            mixBlendMode: "overlay",
            isolation: "isolate",
          }}
        />
        <Path
          d="M72.587 39.559l.008 2.759.194.111-.008-2.981z"
          fill="#e5dbd1"
        />
        <Path d="M71.648 42.864v.222l1.14-.658-.194-.111z" fill="#faefe4" />
      </G>
      <G>
        <Path
          d="M67.554 42.472l.008 2.982 1.14-.658-.008-2.978z"
          fill="#65c5e5"
        />
        <Path
          d="M147.082 379.654l.006 2.091 1.137-1.793v-.956z"
          transform="translate(-79.528 -337.182)"
          opacity={0.3}
          fill="url(#prefix__ax)"
          style={{
            mixBlendMode: "overlay",
            isolation: "isolate",
          }}
        />
        <Path d="M68.5 41.925l.008 2.759.194.111-.008-2.977z" fill="#e5dbd1" />
        <Path d="M67.562 45.231v.223l1.14-.658-.194-.111z" fill="#faefe4" />
      </G>
      <G>
        <Path
          d="M126.1 440.755c-.451-.26-.817-.051-.819.466l-.008 3.014 1.631.942.008-3.014a1.792 1.792 0 00-.812-1.408z"
          transform="translate(-63.115 -383.57)"
          fill="url(#prefix__ay)"
        />
        <Path
          d="M125.27 452.271l1.631.942.005-1.891-1.637.945z"
          transform="translate(-63.115 -391.606)"
          fill="url(#prefix__ay)"
        />
      </G>
      <Path
        d="M54.4 65.143l1.636.944 7.75-4.475-1.63-.948zM71.463 74.432l1.636.944 7.75-4.475-1.63-.947z"
        fill="#e2db81"
      />
      <G>
        <Path
          d="M92.293 459.977a.272.272 0 00-.019-.041.293.293 0 00-.027-.041.426.426 0 00-.034-.038l-.039-.032c-.013-.01-.028-.017-.042-.025l-.041-.018a.281.281 0 00-.038-.011.261.261 0 00-.059-.008h-.023l.019.012.022.013.027.017.031.02.033.023c.011.007.022.018.034.026l.033.029c.01.011.021.02.03.031a.412.412 0 01.027.032l.024.032.02.031a.7.7 0 01.037.07.135.135 0 000-.023.241.241 0 00-.006-.06.272.272 0 00-.009-.039z"
          transform="translate(-38.058 -397.958)"
          fill="url(#prefix__az)"
        />
        <Path
          d="M93.321 459.336a.289.289 0 00-.085.139.267.267 0 00-.01.043.275.275 0 00-.005.042.349.349 0 000 .039v.035a.279.279 0 00.01.052.03.03 0 00.006.019l.007-.019c0-.012.008-.029.013-.05l.008-.033.009-.036.01-.037c.004-.012.006-.025.011-.038l.012-.037.013-.036c.004-.012.009-.022.014-.032l.014-.029a.484.484 0 01.026-.042l.012-.016a.086.086 0 00-.02.006.174.174 0 00-.045.03z"
          transform="translate(-38.997 -397.61)"
          fill="url(#prefix__aA)"
        />
        <Path
          d="M92.982 459.3a.394.394 0 00-.026-.055.274.274 0 00-.01.06.51.51 0 00.009.129.5.5 0 00.04.123.276.276 0 00.031.052.334.334 0 000-.06.662.662 0 00-.013-.127.689.689 0 00-.031-.122z"
          transform="translate(-38.791 -397.571)"
          fill="url(#prefix__aB)"
        />
        <Path
          d="M92.352 460.152a.191.191 0 00-.015-.033.239.239 0 00-.021-.033.335.335 0 00-.027-.03l-.031-.025-.033-.02-.032-.011-.03-.009a.21.21 0 00-.047-.006H92.1l.015.01.017.01.022.013.025.016.026.018.027.021.026.023.024.024.022.026.019.025.016.024a.509.509 0 01.029.055.1.1 0 000-.018.179.179 0 000-.047.2.2 0 00-.016-.033z"
          transform="translate(-38.153 -398.123)"
          fill="url(#prefix__aC)"
        />
        <Path
          d="M93.164 459.646a.23.23 0 00-.067.11.278.278 0 00-.008.034.261.261 0 000 .033v.059a.242.242 0 00.008.041v.015l.005-.015c0-.01.006-.023.01-.039s0-.017.006-.025 0-.019.007-.028 0-.02.007-.03.005-.02.008-.03l.009-.029.01-.028a.203.203 0 01.011-.026l.011-.023a.336.336 0 01.02-.033l.009-.013a.068.068 0 00-.015 0 .14.14 0 00-.031.027z"
          transform="translate(-38.896 -397.849)"
          fill="url(#prefix__aD)"
        />
        <Path
          d="M92.9 459.62a.287.287 0 00-.021-.043.226.226 0 00-.008.048.417.417 0 00.038.2.216.216 0 00.024.041.271.271 0 000-.048.532.532 0 00-.01-.1.544.544 0 00-.023-.098z"
          transform="translate(-38.733 -397.818)"
          fill="url(#prefix__aE)"
        />
        <Path
          d="M93.311 459.25c0-.015-.011-.029-.016-.042a.3.3 0 00-.019-.035.261.261 0 00-.035-.048l-.015-.017v.022c0 .014 0 .015.006.025s0 .02.007.031l.008.036c0 .013 0 .027.007.04s0 .028 0 .043v.087a.382.382 0 010 .042c0 .014 0 .027-.006.039s-.005.025-.009.035a.664.664 0 01-.024.075.128.128 0 00.018-.014.216.216 0 00.039-.046.244.244 0 00.02-.035.3.3 0 00.016-.043.292.292 0 00.011-.048.426.426 0 000-.051v-.05c0-.016-.004-.031-.008-.046z"
          transform="translate(-38.996 -397.465)"
          fill="url(#prefix__aF)"
        />
        <Path
          d="M93.651 460.074a.292.292 0 00-.159.036.32.32 0 00-.038.023.26.26 0 00-.034.026.355.355 0 00-.029.027l-.023.027a.356.356 0 00-.03.044l-.01.018.018-.009.045-.025.029-.017.032-.019.034-.019.035-.019.035-.017.035-.016.033-.013.031-.01a.427.427 0 01.048-.011h.02a.077.077 0 00-.018-.01.167.167 0 00-.054-.016z"
          transform="translate(-39.079 -398.191)"
          fill="url(#prefix__aG)"
        />
        <Path
          d="M93.541 459.613a.5.5 0 00-.061.114.278.278 0 00-.016.059.342.342 0 00.047-.039.66.66 0 00.082-.1.671.671 0 00.064-.11.362.362 0 00.021-.057.272.272 0 00-.05.035.506.506 0 00-.087.098z"
          transform="translate(-39.181 -397.746)"
          fill="url(#prefix__aH)"
        />
        <Path
          d="M88.572 460.666a.337.337 0 00-.024-.052.371.371 0 00-.033-.051.5.5 0 00-.042-.047.948.948 0 00-.049-.04l-.052-.031-.052-.022a.452.452 0 00-.048-.014.338.338 0 00-.074-.01h-.028l.024.016.027.016.034.021.039.025c.013.009.027.02.042.029s.027.023.042.033l.041.036c.012.013.026.025.038.039a.523.523 0 01.034.04l.03.04c.01.013.018.026.025.039a.843.843 0 01.046.087.161.161 0 000-.028.278.278 0 00-.007-.075.32.32 0 00-.013-.051z"
          transform="translate(-35.197 -398.435)"
          fill="url(#prefix__aI)"
        />
        <Path
          d="M89.859 459.863a.366.366 0 00-.107.174.384.384 0 00-.013.054.327.327 0 00-.006.053.421.421 0 000 .049v.044a.378.378 0 00.013.065c0 .016.007.024.007.024s0-.009.008-.024.01-.037.017-.062l.01-.041.011-.045c.003-.016.008-.031.012-.047l.013-.048.015-.047.016-.044c.005-.014.011-.028.018-.041s.011-.025.018-.036a.57.57 0 01.032-.053l.015-.02a.109.109 0 00-.025.008.205.205 0 00-.054.037z"
          transform="translate(-36.373 -398)"
          fill="url(#prefix__aJ)"
        />
        <Path
          d="M89.434 459.823a.453.453 0 00-.032-.068.334.334 0 00-.012.075.662.662 0 00.061.315.356.356 0 00.039.066.409.409 0 00.006-.076.84.84 0 00-.016-.159.855.855 0 00-.046-.153z"
          transform="translate(-36.115 -397.952)"
          fill="url(#prefix__aK)"
        />
        <Path
          d="M88.646 460.885a.3.3 0 00-.019-.041.313.313 0 00-.027-.04.333.333 0 00-.033-.037c-.013-.011-.025-.022-.039-.031l-.041-.025-.041-.018a.374.374 0 00-.038-.011.27.27 0 00-.058-.008h-.022l.019.012.021.013c.008 0 .017.011.027.017l.031.02.033.023.033.026.032.028c.01.01.021.02.03.031a.34.34 0 01.027.032l.024.032c.006.011.014.02.019.03a.632.632 0 01.036.069.126.126 0 000-.022.213.213 0 00-.006-.059.266.266 0 00-.008-.041z"
          transform="translate(-35.317 -398.643)"
          fill="url(#prefix__F)"
        />
        <Path
          d="M89.662 460.252a.33.33 0 00-.094.18.271.271 0 000 .042V460.548a.311.311 0 00.01.051c0 .012.006.019.006.019s0-.007.006-.019.008-.029.013-.049l.008-.032.009-.035.009-.037.011-.038.012-.037.013-.035c.004-.012.009-.022.014-.032l.014-.029a.42.42 0 01.026-.042l.012-.016a.084.084 0 00-.02.006.169.169 0 00-.049.029z"
          transform="translate(-36.245 -398.3)"
          fill="url(#prefix__aL)"
        />
        <Path
          d="M89.327 460.22a.359.359 0 00-.026-.054.281.281 0 00-.01.059.511.511 0 00.009.128.5.5 0 00.039.122.279.279 0 00.031.052.329.329 0 000-.06.651.651 0 00-.013-.126.669.669 0 00-.03-.121z"
          transform="translate(-36.041 -398.261)"
          fill="url(#prefix__aM)"
        />
        <Path
          d="M89.846 459.756c-.006-.019-.013-.036-.02-.053a.459.459 0 00-.024-.044.341.341 0 00-.044-.06l-.019-.021v.028c0 .018 0 .019.007.031s.005.025.008.039l.01.045c0 .016 0 .033.008.05s0 .035.006.053v.162c0 .017-.006.033-.008.049s-.006.031-.011.044a.885.885 0 01-.03.094.164.164 0 00.023-.017.29.29 0 00.049-.057.312.312 0 00.025-.044.33.33 0 00.02-.053.352.352 0 00.014-.06.543.543 0 000-.063c0-.021 0-.043-.005-.063s-.004-.041-.009-.06z"
          transform="translate(-36.372 -397.819)"
          fill="url(#prefix__aN)"
        />
        <Path
          d="M90.272 460.786a.363.363 0 00-.2.045.376.376 0 00-.047.028.31.31 0 00-.042.032.479.479 0 00-.036.033l-.029.033a.4.4 0 00-.038.054l-.012.022.023-.011c.015-.007.033-.019.056-.031l.036-.021.04-.023.042-.024.044-.024.044-.022.043-.019.042-.016.038-.012a.479.479 0 01.06-.014h.025a.111.111 0 00-.023-.013.216.216 0 00-.066-.017z"
          transform="translate(-36.475 -398.727)"
          fill="url(#prefix__aO)"
        />
        <Path
          d="M90.133 460.21a.621.621 0 00-.076.143.353.353 0 00-.02.074.433.433 0 00.058-.049.844.844 0 00.1-.122.867.867 0 00.079-.138.458.458 0 00.026-.071.342.342 0 00-.063.044.629.629 0 00-.104.119z"
          transform="translate(-36.603 -398.171)"
          fill="url(#prefix__aP)"
        />
        <G>
          <Path
            d="M94.392 461.715a.265.265 0 00-.019-.041.278.278 0 00-.027-.041.373.373 0 00-.034-.038l-.039-.032-.042-.025-.041-.018a.293.293 0 00-.039-.011.252.252 0 00-.059-.008h-.022l.019.013.022.013.027.017.031.02a.657.657 0 00.033.023l.033.027.033.029c.01.011.021.02.03.031s.02.021.027.032l.024.032c.008.01.014.021.02.031a.69.69 0 01.037.07.124.124 0 000-.023.219.219 0 00-.006-.06.24.24 0 00-.008-.041z"
            transform="translate(-39.637 -399.266)"
            fill="url(#prefix__aQ)"
          />
          <Path
            d="M95.419 461.074a.291.291 0 00-.085.139.3.3 0 00-.01.043.247.247 0 00-.005.042.357.357 0 000 .039v.035a.326.326 0 00.01.052c0 .012.006.019.006.019s0-.007.006-.019.008-.029.013-.05l.008-.033.009-.036.009-.038.011-.038.012-.037.013-.035.014-.033.014-.029a.4.4 0 01.026-.042l.012-.016a.091.091 0 00-.02.006.169.169 0 00-.043.031z"
            transform="translate(-40.576 -398.918)"
            fill="url(#prefix__aR)"
          />
          <Path
            d="M95.081 461.042a.366.366 0 00-.026-.054.286.286 0 00-.01.06.511.511 0 00.009.129.5.5 0 00.04.123.291.291 0 00.031.053.347.347 0 000-.06.67.67 0 00-.013-.127.688.688 0 00-.031-.124z"
            transform="translate(-40.37 -398.88)"
            fill="url(#prefix__aS)"
          />
          <Path
            d="M94.451 461.891a.226.226 0 00-.015-.033.2.2 0 00-.021-.032.272.272 0 00-.026-.03l-.031-.025-.033-.02-.033-.014a.263.263 0 00-.03-.009.2.2 0 00-.046-.006H94.2l.015.01.017.01.021.013.025.016.026.018.026.021.026.023c.008.008.017.016.024.025a.3.3 0 01.022.025l.019.025a.158.158 0 01.015.024.536.536 0 01.029.055.088.088 0 000-.018.189.189 0 000-.047.214.214 0 00-.014-.031z"
            transform="translate(-39.733 -399.431)"
            fill="url(#prefix__aT)"
          />
          <Path
            d="M95.263 461.384a.229.229 0 00-.067.11.215.215 0 00-.008.034.2.2 0 000 .033.257.257 0 000 .031v.028a.231.231 0 00.008.041v.015l.005-.015c0-.009.006-.023.01-.039s0-.017.006-.026 0-.019.007-.028 0-.02.008-.03.005-.02.008-.03l.009-.029.01-.028.011-.026.011-.023a.352.352 0 01.02-.033l.009-.013h-.016a.137.137 0 00-.031.028z"
            transform="translate(-40.474 -399.157)"
            fill="url(#prefix__aU)"
          />
          <Path
            d="M95 461.359a.3.3 0 00-.021-.043.208.208 0 00-.008.048.42.42 0 00.038.2.239.239 0 00.024.042.271.271 0 000-.048.528.528 0 00-.01-.1.549.549 0 00-.023-.099z"
            transform="translate(-40.311 -399.127)"
            fill="url(#prefix__aV)"
          />
          <Path
            d="M95.409 460.988c0-.015-.011-.029-.016-.042a.331.331 0 00-.019-.035.273.273 0 00-.035-.048l-.015-.017v.022c0 .014 0 .015.006.024s0 .02.007.031l.008.036c0 .013 0 .026.006.04s0 .028 0 .043v.129c0 .014 0 .027-.007.039s-.005.025-.008.035a.662.662 0 01-.024.075.131.131 0 00.018-.014.225.225 0 00.039-.046.279.279 0 00.02-.035.27.27 0 00.016-.043.3.3 0 00.011-.048.375.375 0 000-.051v-.05a.152.152 0 00-.007-.045z"
            transform="translate(-40.575 -398.773)"
            fill="url(#prefix__aW)"
          />
          <Path
            d="M95.75 461.812a.293.293 0 00-.159.036.306.306 0 00-.038.023.272.272 0 00-.034.026.3.3 0 00-.029.027l-.023.026a.327.327 0 00-.03.044l-.01.018.018-.009.045-.025.029-.017.032-.019.034-.019.035-.019.035-.018.034-.016.033-.013.03-.01a.412.412 0 01.049-.011h.02a.089.089 0 00-.018-.01.167.167 0 00-.053-.014z"
            transform="translate(-40.658 -399.499)"
            fill="url(#prefix__R)"
          />
          <Path
            d="M95.639 461.351a.494.494 0 00-.061.114.293.293 0 00-.016.059.335.335 0 00.047-.039.675.675 0 00.082-.1.666.666 0 00.063-.11.379.379 0 00.021-.057.271.271 0 00-.05.035.5.5 0 00-.086.098z"
            transform="translate(-40.76 -399.054)"
            fill="url(#prefix__aX)"
          />
        </G>
        <Path
          d="M89.555 460.615l1.6.932.837-.483-1.6-.932z"
          transform="translate(-36.24 -398.235)"
          opacity={0.17}
          fill="url(#prefix__aY)"
          style={{
            mixBlendMode: "multiply",
            isolation: "isolate",
          }}
        />
        <G transform="translate(53.26 61.78)" fill="url(#prefix__aZ)">
          <Path d="M.597.918l.93-.125L.497.537zM.497.533l1.03.256-.45-.485z" />
          <Path d="M1.077.305l.45.485L1.48.334zM0 .577l.6.337L.5.533z" />
          <Path d="M0 .577L.5.533l.58-.228L.341.166zM.341.165l.739.139.4.028-.682-.333z" />
        </G>
      </G>
      <G>
        <Path
          d="M173.193 462.834a.257.257 0 00-.019-.041.273.273 0 00-.027-.041.383.383 0 00-.034-.038l-.039-.032-.042-.025-.041-.018a.3.3 0 00-.039-.011.252.252 0 00-.059-.008h-.022l.019.012.022.013.027.017.031.02.033.023.033.026.033.029c.01.011.021.02.03.031a.383.383 0 01.027.032l.024.032c.008.01.014.021.02.031a.684.684 0 01.037.069.123.123 0 000-.023.218.218 0 00-.006-.06.242.242 0 00-.008-.038z"
          transform="translate(-98.934 -400.107)"
          fill="url(#prefix__ba)"
        />
        <Path
          d="M174.22 462.192a.291.291 0 00-.085.139.308.308 0 00-.01.043.244.244 0 00-.005.042.355.355 0 000 .039v.035a.329.329 0 00.01.052c0 .012.006.019.006.019s0-.007.006-.019.008-.03.013-.05l.008-.033.009-.036.009-.037.011-.038.012-.037.013-.036c.004-.012.009-.022.014-.032l.014-.029a.4.4 0 01.026-.042l.012-.016a.1.1 0 00-.02.006.167.167 0 00-.043.03z"
          transform="translate(-99.873 -399.759)"
          fill="url(#prefix__bb)"
        />
        <Path
          d="M173.881 462.16a.37.37 0 00-.026-.055.289.289 0 00-.01.06.511.511 0 00.009.129.506.506 0 00.04.123.288.288 0 00.031.052.348.348 0 000-.061.724.724 0 00-.048-.249z"
          transform="translate(-99.666 -399.72)"
          fill="url(#prefix__bc)"
        />
        <Path
          d="M173.252 463.008a.217.217 0 00-.015-.033.247.247 0 00-.021-.032.3.3 0 00-.026-.03c-.01-.009-.02-.018-.031-.025l-.033-.02-.033-.014-.03-.009a.2.2 0 00-.046-.006H173l.015.01.017.01.021.013.025.016.026.018.027.021.026.023c.008.008.017.016.024.025l.022.026.019.025.015.025a.514.514 0 01.029.055.094.094 0 000-.018.18.18 0 000-.047.176.176 0 00-.014-.033z"
          transform="translate(-99.029 -400.272)"
          fill="url(#prefix__bd)"
        />
        <Path
          d="M174.064 462.5a.23.23 0 00-.067.11.21.21 0 00-.008.034.191.191 0 000 .033.268.268 0 000 .031v.028a.271.271 0 00.008.041.149.149 0 000 .015l.005-.015c0-.01.006-.023.01-.039s0-.017.006-.026 0-.018.007-.028 0-.02.008-.029.005-.02.008-.03l.009-.03.01-.028.011-.026.011-.023a.255.255 0 01.02-.033l.009-.013a.063.063 0 00-.016 0 .13.13 0 00-.031.028z"
          transform="translate(-99.771 -399.998)"
          fill="url(#prefix__be)"
        />
        <Path
          d="M173.8 462.476a.3.3 0 00-.021-.043.208.208 0 00-.008.048.394.394 0 00.007.1.4.4 0 00.031.1.227.227 0 00.025.041.273.273 0 000-.048.527.527 0 00-.01-.1.536.536 0 00-.024-.098z"
          transform="translate(-99.608 -399.967)"
          fill="url(#prefix__bf)"
        />
        <Path
          d="M174.21 462.106c0-.015-.011-.029-.016-.042a.337.337 0 00-.019-.035.264.264 0 00-.035-.048l-.015-.017v.022c0 .014 0 .015.006.025s0 .02.007.031l.008.036c0 .013 0 .026.006.04s0 .028 0 .042v.088a.385.385 0 010 .042c0 .014 0 .027-.006.04s-.005.025-.008.035a.653.653 0 01-.024.075.138.138 0 00.018-.014.234.234 0 00.039-.046.273.273 0 00.036-.078.3.3 0 00.011-.048.378.378 0 000-.05v-.05a.193.193 0 00-.008-.048z"
          transform="translate(-99.872 -399.614)"
          fill="url(#prefix__bg)"
        />
        <Path
          d="M174.551 462.93a.291.291 0 00-.159.036.27.27 0 00-.038.023.291.291 0 00-.034.025l-.029.027-.023.026a.318.318 0 00-.03.043l-.01.018.018-.009.045-.025.029-.017.032-.018.034-.019.035-.019.035-.018.034-.015.033-.013.03-.01a.383.383 0 01.048-.011h.02a.087.087 0 00-.018-.01.166.166 0 00-.052-.014z"
          transform="translate(-99.955 -400.34)"
          fill="url(#prefix__bh)"
        />
        <Path
          d="M174.44 462.468a.5.5 0 00-.061.114.292.292 0 00-.016.059.347.347 0 00.047-.039.667.667 0 00.082-.1.689.689 0 00.063-.11.379.379 0 00.021-.057.275.275 0 00-.05.035.5.5 0 00-.086.098z"
          transform="translate(-100.056 -399.895)"
          fill="url(#prefix__bi)"
        />
        <Path
          d="M169.471 463.522a.348.348 0 00-.024-.052.364.364 0 00-.034-.051.509.509 0 00-.042-.047.474.474 0 00-.101-.071c-.017-.009-.035-.015-.052-.022a.439.439 0 00-.048-.014.337.337 0 00-.074-.01h-.028l.024.016.027.016.034.021.039.025c.013.01.027.02.042.029s.027.023.042.033l.041.036c.012.013.026.025.038.039s.024.026.034.04l.03.04c.01.013.018.026.025.039a.82.82 0 01.046.087.168.168 0 000-.028.3.3 0 00-.007-.075.327.327 0 00-.012-.051z"
          transform="translate(-96.072 -400.584)"
          fill="url(#prefix__M)"
        />
        <Path
          d="M170.758 462.719a.363.363 0 00-.106.174.344.344 0 00-.013.054.36.36 0 00-.006.053v.093a.378.378 0 00.013.065c0 .016.008.024.008.024s0-.009.008-.024.01-.037.017-.062l.01-.041.011-.045c.003-.016.008-.031.012-.047l.013-.048.015-.047.016-.044a.503.503 0 01.035-.077.552.552 0 01.032-.053l.015-.02a.112.112 0 00-.025.008.21.21 0 00-.055.037z"
          transform="translate(-97.248 -400.149)"
          fill="url(#prefix__I)"
        />
        <Path
          d="M170.334 462.679a.437.437 0 00-.033-.068.352.352 0 00-.012.075.671.671 0 00.061.315.365.365 0 00.039.066.424.424 0 00.005-.076.821.821 0 00-.016-.159.854.854 0 00-.044-.153z"
          transform="translate(-96.99 -400.101)"
          fill="url(#prefix__bj)"
        />
        <Path
          d="M169.546 463.741a.261.261 0 00-.019-.041.267.267 0 00-.027-.04.364.364 0 00-.033-.037l-.039-.032-.041-.025-.041-.018c-.013 0-.026-.008-.038-.011a.261.261 0 00-.058-.008h-.022l.019.012.021.013c.008 0 .017.011.027.017l.031.02.033.023.033.026.032.029c.01.01.021.02.03.031l.027.032.024.032c.008.01.014.02.019.03a.659.659 0 01.036.069.127.127 0 000-.022.233.233 0 00-.006-.059.267.267 0 00-.008-.041z"
          transform="translate(-96.192 -400.792)"
          fill="url(#prefix__bk)"
        />
        <Path
          d="M170.562 463.107a.323.323 0 00-.094.18.243.243 0 000 .042.346.346 0 000 .039v.035a.325.325 0 00.01.051.03.03 0 00.006.019l.007-.019c0-.012.008-.029.013-.049l.008-.032.009-.035.009-.037c.003-.012.006-.025.011-.037s.008-.025.012-.037l.013-.035.014-.032.014-.029a.433.433 0 01.025-.042l.012-.016a.089.089 0 00-.02.006.17.17 0 00-.049.028z"
          transform="translate(-97.121 -400.448)"
          fill="url(#prefix__bl)"
        />
        <Path
          d="M170.227 463.075a.372.372 0 00-.026-.054.266.266 0 00-.01.06.5.5 0 00.009.127.507.507 0 00.039.122.285.285 0 00.03.052.339.339 0 000-.06.714.714 0 00-.048-.246z"
          transform="translate(-96.917 -400.41)"
          fill="url(#prefix__bm)"
        />
        <Path
          d="M170.745 462.612c-.006-.019-.013-.036-.02-.053a.439.439 0 00-.024-.044.324.324 0 00-.044-.06l-.019-.021s0 .01.005.028 0 .019.007.031.005.025.008.039l.009.045c0 .016 0 .033.008.05s0 .035.005.053v.108a.508.508 0 01-.005.053c0 .017-.005.034-.008.049s-.006.031-.011.044a.824.824 0 01-.03.094.154.154 0 00.023-.017.288.288 0 00.049-.057.338.338 0 00.025-.044.329.329 0 00.02-.053.351.351 0 00.013-.06.488.488 0 000-.063c0-.021 0-.042-.005-.063s-.001-.041-.006-.059z"
          transform="translate(-97.247 -399.968)"
          fill="url(#prefix__bn)"
        />
        <Path
          d="M171.171 463.642a.364.364 0 00-.2.045.392.392 0 00-.047.028.347.347 0 00-.042.032.43.43 0 00-.036.033l-.029.033a.377.377 0 00-.038.055l-.012.022.023-.011.056-.031.036-.021.04-.023c.013-.009.028-.016.042-.024a.48.48 0 01.044-.024l.044-.022.043-.02.041-.016.038-.013a.521.521 0 01.06-.014h.025a.12.12 0 00-.023-.012.21.21 0 00-.065-.017z"
          transform="translate(-97.35 -400.876)"
          fill="url(#prefix__M)"
        />
        <Path
          d="M171.033 463.065a.645.645 0 00-.076.143.347.347 0 00-.02.074.422.422 0 00.058-.049.9.9 0 00.182-.26.457.457 0 00.026-.071.341.341 0 00-.062.044.632.632 0 00-.108.119z"
          transform="translate(-97.478 -400.319)"
          fill="url(#prefix__bo)"
        />
        <G>
          <Path
            d="M175.291 464.571a.267.267 0 00-.019-.041.292.292 0 00-.027-.041.376.376 0 00-.034-.038l-.039-.032-.042-.025-.041-.018a.282.282 0 00-.038-.011.253.253 0 00-.059-.008h-.023l.019.012.022.013.027.017.031.02c.011.008.021.016.033.023s.022.018.034.026l.033.029c.01.011.021.02.03.031l.027.032.024.032c.008.01.014.021.02.031a.64.64 0 01.037.069.136.136 0 000-.023.231.231 0 00-.006-.06.267.267 0 00-.009-.038z"
            transform="translate(-100.512 -401.415)"
            fill="url(#prefix__bp)"
          />
          <Path
            d="M176.319 463.93a.29.29 0 00-.085.139.268.268 0 00-.01.043.275.275 0 00-.005.042V464.228a.32.32 0 00.01.052.03.03 0 00.006.019l.007-.019c0-.012.008-.029.013-.05l.008-.033.009-.036.01-.037c.004-.012.006-.026.011-.038s.008-.025.012-.037l.013-.036c.004-.012.009-.022.014-.032l.014-.029a.449.449 0 01.026-.042l.012-.016a.091.091 0 00-.02.006.168.168 0 00-.045.03z"
            transform="translate(-101.452 -401.067)"
            fill="url(#prefix__bq)"
          />
          <Path
            d="M175.98 463.9a.36.36 0 00-.026-.055.273.273 0 00-.01.06.5.5 0 00.009.129.492.492 0 00.04.123.292.292 0 00.031.052.349.349 0 000-.06.665.665 0 00-.013-.127.688.688 0 00-.031-.122z"
            transform="translate(-101.245 -401.028)"
            fill="url(#prefix__br)"
          />
          <Path
            d="M175.35 464.746a.21.21 0 00-.015-.033.231.231 0 00-.021-.032.293.293 0 00-.027-.03l-.031-.025-.033-.02-.033-.014a.281.281 0 00-.03-.009.229.229 0 00-.046-.007h-.014l.015.01.017.01.022.013.025.016.026.018.026.021.026.023c.008.008.017.016.024.025a.325.325 0 01.021.026l.019.025.016.025a.5.5 0 01.029.055.115.115 0 000-.018.179.179 0 000-.047.2.2 0 00-.016-.032z"
            transform="translate(-100.608 -401.58)"
            fill="url(#prefix__bs)"
          />
          <Path
            d="M176.162 464.24a.229.229 0 00-.067.11.207.207 0 00-.008.034.234.234 0 000 .033v.059a.232.232 0 00.008.041v.015l.005-.015c0-.01.006-.023.01-.039s0-.017.006-.025 0-.019.007-.028 0-.02.007-.03.005-.02.009-.03l.009-.029.01-.028.011-.026.011-.023a.346.346 0 01.02-.033l.009-.013a.069.069 0 00-.015 0 .135.135 0 00-.032.027z"
            transform="translate(-101.35 -401.306)"
            fill="url(#prefix__bt)"
          />
          <Path
            d="M175.895 464.214a.271.271 0 00-.021-.043.228.228 0 00-.008.048.4.4 0 00.007.1.4.4 0 00.031.1.218.218 0 00.025.041.268.268 0 000-.048.53.53 0 00-.01-.1.537.537 0 00-.024-.098z"
            transform="translate(-101.187 -401.275)"
            fill="url(#prefix__bu)"
          />
          <Path
            d="M176.309 463.844c0-.015-.011-.029-.016-.042a.3.3 0 00-.019-.035.262.262 0 00-.035-.048l-.015-.017v.022c0 .014 0 .015.006.025s0 .02.007.031l.008.036c0 .013 0 .026.007.04s0 .028 0 .043v.129c0 .014 0 .027-.006.039s-.005.024-.008.035a.683.683 0 01-.025.075.138.138 0 00.018-.014.226.226 0 00.039-.046.249.249 0 00.02-.035.3.3 0 00.016-.043.286.286 0 00.011-.048.382.382 0 000-.051v-.05c0-.016-.004-.031-.008-.046z"
            transform="translate(-101.45 -400.922)"
            fill="url(#prefix__bv)"
          />
          <Path
            d="M176.649 464.668a.292.292 0 00-.159.036.305.305 0 00-.038.023.279.279 0 00-.034.026c-.01.009-.021.018-.029.027l-.023.026a.346.346 0 00-.03.044l-.01.018.018-.009.045-.025.029-.017.032-.019.034-.019.035-.019.035-.018.034-.016.033-.013.031-.01a.436.436 0 01.048-.011h.02a.087.087 0 00-.018-.01.169.169 0 00-.053-.014z"
            transform="translate(-101.533 -401.648)"
            fill="url(#prefix__bw)"
          />
          <Path
            d="M176.539 464.207a.507.507 0 00-.061.114.281.281 0 00-.016.059.339.339 0 00.047-.039.644.644 0 00.082-.1.669.669 0 00.064-.11.363.363 0 00.021-.057.263.263 0 00-.05.035.5.5 0 00-.087.098z"
            transform="translate(-101.635 -401.203)"
            fill="url(#prefix__bx)"
          />
        </G>
        <Path
          d="M170.454 463.471l1.6.932.837-.483-1.6-.932z"
          transform="translate(-97.115 -400.384)"
          opacity={0.17}
          fill="url(#prefix__by)"
          style={{
            mixBlendMode: "multiply",
            isolation: "isolate",
          }}
        />
        <G transform="translate(73.284 62.487)" fill="url(#prefix__aZ)">
          <Path d="M.596.913l.93-.125L.496.532z" />
          <Path d="M.497.533l1.03.256-.45-.485z" />
          <Path d="M1.077.305l.45.485L1.48.334zM0 .577l.6.337L.5.533z" />
          <Path d="M0 .581L.5.537l.58-.228L.341.17zM.342.165l.739.139.4.029L.799 0z" />
        </G>
      </G>
      <G>
        <Path
          d="M206.9 480.233l7.555 4.362 9.456-5.495a1.95 1.95 0 00.851-.873l-7.229-4.173z"
          transform="translate(-124.541 -408.711)"
          opacity={0.3}
          fill="url(#prefix__E)"
          style={{
            mixBlendMode: "multiply",
            isolation: "isolate",
          }}
        />
        <Path
          d="M86.05 73.655l10.633-6.179.035-12.2-10.633 6.179z"
          fill="#bd481b"
        />
        <Path
          d="M75.348 67.475l10.7 6.179.035-12.2-10.7-6.179z"
          fill="#df6d3e"
        />
        <Path
          d="M75.382 55.28l10.7 6.179 10.633-6.179-10.7-6.179z"
          fill="#c2bbb4"
        />
        <Path
          d="M79.671 52.127l6.421 3.707 6.378-3.707-6.421-3.707z"
          fill="#c7805f"
        />
        <Path
          d="M196.031 409.394l1.829 1.056 6.378-3.707-1.829-1.056z"
          transform="translate(-116.36 -357.267)"
          opacity={0.3}
          fill="url(#prefix__bz)"
          style={{
            mixBlendMode: "multiply",
            isolation: "isolate",
          }}
        />
        <Path
          d="M79.67 52.127l6.421 3.707 6.378-3.706-6.421-3.707zm11.97 0l-5.549 3.225-5.591-3.228 5.549-3.225z"
          fill="#ecad91"
        />
        <Path
          d="M79.67 52.127l-4.275 3.171 10.7 6.178v-5.642z"
          fill="#e0906b"
        />
        <Path d="M86.091 55.835v5.642l10.63-6.178-4.257-3.17z" fill="#ba785a" />
        <Path
          d="M74.716 56.212l11.351 6.553v-.55l-11.351-6.553z"
          fill="#c5c5c5"
        />
        <Path
          d="M86.067 62.769l11.278-6.557v-.55l-11.277 6.554z"
          fill="#898989"
        />
        <Path
          d="M96.713 55.304l-.036.362-10.611 6.166-10.68-6.166-.01-.383-.658.383 11.351 6.553 11.277-6.554-.634-.366z"
          fill="#dcdcdc"
        />
        <Path
          d="M74.716 61.781l11.351 6.553v-.55l-11.351-6.553z"
          fill="#c5c5c5"
        />
        <Path
          d="M86.067 68.338l11.278-6.557v-.55l-11.277 6.554z"
          fill="#898989"
        />
        <Path
          d="M96.713 60.872l-.036.362L86.066 67.4l-10.68-6.166-.01-.383-.658.383 11.351 6.553 11.277-6.554-.634-.366z"
          fill="#dcdcdc"
        />
        <Path d="M76.208 60.418l1.14.658.008-2.982-1.14-.658z" fill="#65c5e5" />
        <Path
          d="M182.066 443.076l1.137 1.793.006-2.091-1.14-.658z"
          transform="translate(-105.852 -384.682)"
          opacity={0.3}
          fill="url(#prefix__ax)"
          style={{
            mixBlendMode: "overlay",
            isolation: "isolate",
          }}
        />
        <Path
          d="M76.208 60.418l.194-.111.008-2.759-.193-.112z"
          fill="#b1aca1"
        />
        <Path d="M76.208 60.42l1.14.658v-.223l-.947-.547z" fill="#faefe4" />
        <Path d="M79.956 62.603l1.14.658.008-2.981-1.14-.658z" fill="#65c5e5" />
        <Path
          d="M197.206 451.892l1.137 1.793.006-2.091-1.14-.658z"
          transform="translate(-117.244 -391.315)"
          opacity={0.3}
          fill="url(#prefix__ax)"
          style={{
            mixBlendMode: "overlay",
            isolation: "isolate",
          }}
        />
        <Path
          d="M79.956 62.603l.194-.111.008-2.759-.193-.112z"
          fill="#b1aca1"
        />
        <Path d="M79.956 62.603l1.14.658v-.222l-.947-.547z" fill="#faefe4" />
        <Path d="M84.056 64.957l1.14.658.008-2.982-1.14-.658z" fill="#65c5e5" />
        <Path
          d="M213.773 461.4l1.137 1.793.006-2.091-1.14-.658z"
          transform="translate(-129.712 -398.469)"
          opacity={0.3}
          fill="url(#prefix__ax)"
          style={{
            mixBlendMode: "overlay",
            isolation: "isolate",
          }}
        />
        <Path
          d="M84.056 64.957l.194-.111.008-2.759-.193-.112z"
          fill="#b1aca1"
        />
        <Path d="M84.056 64.956l1.14.658v-.222l-.947-.547z" fill="#faefe4" />
        <Path
          d="M86.816 62.703l.008 2.981 1.14-.658-.008-2.981z"
          fill="#65c5e5"
        />
        <Path
          d="M224.9 461.386l.006 2.09 1.137-1.793v-.955z"
          transform="translate(-138.084 -398.683)"
          opacity={0.3}
          fill="url(#prefix__ax)"
          style={{
            mixBlendMode: "overlay",
            isolation: "isolate",
          }}
        />
        <Path
          d="M87.764 62.157l.008 2.759.194.111-.008-2.981z"
          fill="#e5dbd1"
        />
        <Path d="M86.825 65.462v.222l1.14-.658-.194-.111z" fill="#faefe4" />
        <G>
          <Path
            d="M90.855 60.355l.008 2.981 1.14-.658-.008-2.982z"
            fill="#65c5e5"
          />
          <Path
            d="M241.217 451.9l.006 2.091 1.137-1.793v-.956z"
            transform="translate(-150.362 -391.545)"
            opacity={0.3}
            fill="url(#prefix__ax)"
            style={{
              mixBlendMode: "overlay",
              isolation: "isolate",
            }}
          />
          <Path
            d="M91.802 59.808l.008 2.759.194.111-.008-2.982z"
            fill="#e5dbd1"
          />
          <Path d="M90.863 63.113v.222l1.14-.658-.194-.111z" fill="#faefe4" />
        </G>
        <G>
          <Path
            d="M94.686 58.186l.008 2.981 1.14-.658-.008-2.981z"
            fill="#65c5e5"
          />
          <Path
            d="M256.693 443.14l.006 2.09 1.137-1.793v-.955z"
            transform="translate(-162.007 -384.954)"
            opacity={0.3}
            fill="url(#prefix__ax)"
            style={{
              mixBlendMode: "overlay",
              isolation: "isolate",
            }}
          />
          <Path
            d="M95.632 57.639l.008 2.759.194.111-.009-2.981z"
            fill="#e5dbd1"
          />
          <Path d="M94.693 60.946v.222l1.14-.658-.194-.111z" fill="#faefe4" />
        </G>
        <G>
          <Path
            d="M76.208 66.78l1.14.658.008-2.982-1.14-.658z"
            fill="#65c5e5"
          />
          <Path
            d="M182.066 468.767l1.137 1.793.006-2.091-1.14-.658z"
            transform="translate(-105.852 -404.013)"
            opacity={0.3}
            fill="url(#prefix__ax)"
            style={{
              mixBlendMode: "overlay",
              isolation: "isolate",
            }}
          />
          <Path
            d="M76.208 66.78l.194-.111.008-2.759-.193-.112z"
            fill="#b1aca1"
          />
          <Path d="M76.208 66.78l1.14.658v-.222l-.947-.547z" fill="#faefe4" />
        </G>
        <G>
          <Path
            d="M84.056 71.315l1.14.658.008-2.982-1.14-.658z"
            fill="#65c5e5"
          />
          <Path
            d="M213.773 487.09l1.137 1.793.006-2.091-1.14-.658z"
            transform="translate(-129.712 -417.801)"
            opacity={0.3}
            fill="url(#prefix__ax)"
            style={{
              mixBlendMode: "overlay",
              isolation: "isolate",
            }}
          />
          <Path
            d="M84.056 71.315l.194-.111.008-2.759-.193-.112z"
            fill="#b1aca1"
          />
          <Path d="M84.056 71.316l1.14.658v-.222l-.947-.547z" fill="#faefe4" />
        </G>
        <G>
          <Path
            d="M86.816 69.063l.008 2.981 1.14-.658-.008-2.982z"
            fill="#65c5e5"
          />
          <Path
            d="M224.9 487.077l.006 2.09 1.137-1.793v-.956z"
            transform="translate(-138.084 -418.014)"
            opacity={0.3}
            fill="url(#prefix__ax)"
            style={{
              mixBlendMode: "overlay",
              isolation: "isolate",
            }}
          />
          <Path
            d="M87.764 68.516l.008 2.759.194.111-.008-2.982z"
            fill="#e5dbd1"
          />
          <Path d="M86.825 71.822v.222l1.14-.658-.194-.111z" fill="#faefe4" />
        </G>
        <G>
          <Path
            d="M90.855 66.715l.008 2.982 1.14-.658-.008-2.982z"
            fill="#65c5e5"
          />
          <Path
            d="M241.217 477.59l.006 2.091 1.137-1.793v-.955z"
            transform="translate(-150.362 -410.875)"
            opacity={0.3}
            fill="url(#prefix__ax)"
            style={{
              mixBlendMode: "overlay",
              isolation: "isolate",
            }}
          />
          <Path
            d="M91.802 66.168l.008 2.759.194.111-.008-2.982z"
            fill="#e5dbd1"
          />
          <Path d="M90.863 69.474v.222l1.14-.658-.194-.111z" fill="#faefe4" />
        </G>
        <G>
          <Path
            d="M94.686 64.545l.008 2.982 1.14-.658-.008-2.982z"
            fill="#65c5e5"
          />
          <Path
            d="M256.693 468.83l.006 2.091 1.137-1.793v-.956z"
            transform="translate(-162.007 -404.285)"
            opacity={0.3}
            fill="url(#prefix__ax)"
            style={{
              mixBlendMode: "overlay",
              isolation: "isolate",
            }}
          />
          <Path
            d="M95.632 63.999l.008 2.759.194.111-.009-2.982z"
            fill="#e5dbd1"
          />
          <Path d="M94.693 67.304v.222l1.14-.658-.194-.111z" fill="#faefe4" />
        </G>
        <G>
          <G
            style={{
              isolation: "isolate",
            }}
          >
            <Path
              d="M81.32 71.177l.212-.123.012-4.169-.212.123z"
              fill="#bc4711"
            />
            <Path
              d="M78.642 65.454l2.69 1.553.212-.123-2.69-1.557z"
              fill="#f67724"
            />
            <Path
              d="M78.63 69.623l2.69 1.553.012-4.169-2.69-1.553z"
              fill="#f05915"
            />
          </G>
          <Path d="M79.15 69.94l1.551.9.009-3.333-1.552-.9z" fill="#65c5e5" />
          <Path
            d="M79.874 70.358l.057.033v-3.339l-.057-.033z"
            fill="#ade1fa"
            style={{
              mixBlendMode: "multiply",
              isolation: "isolate",
            }}
          />
        </G>
        <G>
          <Path
            d="M172.865 490.5a.567.567 0 00-.041-.088.6.6 0 00-.057-.087.814.814 0 00-.072-.08c-.027-.024-.055-.047-.083-.068s-.06-.036-.089-.053-.06-.026-.088-.038a.69.69 0 00-.082-.023.569.569 0 00-.125-.018h-.048l.04.027.046.027c.018.009.037.023.058.036l.067.042c.023.016.046.034.071.049s.046.038.072.056l.069.061c.021.023.045.043.064.066a.9.9 0 01.058.068l.051.068c.017.022.03.044.042.065a1.418 1.418 0 01.078.148.278.278 0 00.006-.048.489.489 0 00-.012-.127.567.567 0 00-.025-.083z"
            transform="translate(-98.414 -420.738)"
            fill="url(#prefix__bA)"
          />
          <Path
            d="M175.052 489.133a.621.621 0 00-.181.3.634.634 0 00-.021.091.59.59 0 00-.011.09.817.817 0 000 .084.3.3 0 00.006.075.682.682 0 00.022.11c.007.026.013.041.013.041l.014-.041c.008-.026.017-.063.028-.106.006-.022.012-.044.017-.069s.013-.05.019-.076l.021-.08c.008-.027.014-.054.023-.081l.025-.079c.008-.026.019-.05.027-.076s.019-.048.03-.069.02-.043.03-.061a.892.892 0 01.054-.09.42.42 0 01.026-.034.191.191 0 00-.042.013.357.357 0 00-.1.058z"
            transform="translate(-100.412 -420)"
            fill="url(#prefix__W)"
          />
          <Path
            d="M174.331 489.064a.766.766 0 00-.055-.116.589.589 0 00-.021.128 1.084 1.084 0 00.019.274 1.067 1.067 0 00.084.261.594.594 0 00.066.111.724.724 0 00.009-.129 1.425 1.425 0 00-.028-.27 1.459 1.459 0 00-.074-.259z"
            transform="translate(-99.973 -419.918)"
            fill="url(#prefix__bB)"
          />
          <Path
            d="M172.992 490.868a.487.487 0 00-.032-.069.5.5 0 00-.045-.069.639.639 0 00-.057-.063c-.021-.019-.043-.037-.066-.054s-.047-.029-.07-.042-.047-.021-.069-.03a.553.553 0 00-.065-.019.466.466 0 00-.1-.014h-.038l.031.021.036.022c.014.007.029.018.046.028l.052.033c.018.013.036.027.056.039s.037.03.057.044l.055.049c.017.018.036.034.051.052s.033.035.046.054l.04.054a.375.375 0 01.033.052 1.121 1.121 0 01.062.117.206.206 0 000-.038.393.393 0 00-.01-.1.472.472 0 00-.013-.067z"
            transform="translate(-98.618 -421.091)"
            fill="url(#prefix__bC)"
          />
          <Path
            d="M174.719 489.791a.49.49 0 00-.143.234.5.5 0 00-.017.072.47.47 0 00-.008.071.539.539 0 000 .066v.059a.542.542 0 00.017.087l.01.032s0-.012.011-.032.013-.05.022-.084c0-.017.01-.035.014-.055l.015-.06.016-.063c.005-.021.011-.043.018-.064l.02-.063.022-.06c.007-.02.015-.038.024-.054s.016-.034.023-.049a.707.707 0 01.043-.071l.02-.027a.154.154 0 00-.033.01.282.282 0 00-.074.051z"
            transform="translate(-100.196 -420.507)"
            fill="url(#prefix__ac)"
          />
          <Path
            d="M174.149 489.738a.624.624 0 00-.044-.092.456.456 0 00-.016.1.854.854 0 00.015.217.841.841 0 00.067.206.478.478 0 00.052.088.552.552 0 00.007-.1 1.121 1.121 0 00-.022-.213 1.135 1.135 0 00-.059-.206z"
            transform="translate(-99.849 -420.443)"
            fill="url(#prefix__bD)"
          />
          <Path
            d="M175.03 488.949c-.01-.032-.023-.061-.034-.089a.7.7 0 00-.04-.075.572.572 0 00-.075-.1.758.758 0 00-.032-.035s0 .018.009.047.007.033.012.052l.014.066.016.077c0 .027.008.056.014.085s0 .06.009.09 0 .062 0 .093v.092a.865.865 0 01-.009.089c0 .029-.01.057-.014.084s-.011.052-.018.076a1.457 1.457 0 01-.052.159.274.274 0 00.039-.029.491.491 0 00.083-.1.566.566 0 00.043-.075.589.589 0 00.034-.09.6.6 0 00.023-.1.766.766 0 00.008-.107c0-.036 0-.072-.009-.107s-.013-.071-.021-.103z"
            transform="translate(-100.41 -419.691)"
            fill="url(#prefix__bE)"
          />
          <Path
            d="M175.753 490.7a.618.618 0 00-.339.076.593.593 0 00-.08.048.579.579 0 00-.072.054.727.727 0 00-.062.057c-.018.019-.034.039-.049.057a.651.651 0 00-.064.093l-.021.038.039-.018c.025-.012.056-.031.1-.053l.062-.036c.021-.014.045-.025.068-.039l.072-.041c.025-.014.049-.028.074-.04l.074-.037c.024-.012.049-.022.073-.033s.048-.02.07-.027.044-.016.065-.021a.89.89 0 01.1-.024l.042-.005a.189.189 0 00-.038-.021.357.357 0 00-.114-.028z"
            transform="translate(-100.586 -421.234)"
            fill="url(#prefix__n)"
          />
          <Path
            d="M175.519 489.72a1.071 1.071 0 00-.129.243.6.6 0 00-.034.125.71.71 0 00.1-.083 1.407 1.407 0 00.174-.208 1.438 1.438 0 00.135-.235.806.806 0 00.045-.121.569.569 0 00-.106.074 1.07 1.07 0 00-.185.205z"
            transform="translate(-100.803 -420.289)"
            fill="url(#prefix__bF)"
          />
          <G>
            <Path
              d="M171.8 490.4a.567.567 0 00-.041-.088.611.611 0 00-.057-.087.82.82 0 00-.072-.08c-.027-.024-.055-.047-.083-.068s-.06-.037-.089-.053-.06-.027-.088-.038a.7.7 0 00-.082-.023.555.555 0 00-.125-.018h-.048l.04.027c.013.008.028.018.046.027s.037.023.058.036l.067.042c.023.016.046.034.071.049s.047.038.072.056l.07.061c.021.023.045.043.064.066a.869.869 0 01.058.069c.019.023.034.046.051.068s.03.044.042.065a1.434 1.434 0 01.078.148.277.277 0 00.006-.048.488.488 0 00-.012-.128.575.575 0 00-.026-.083z"
              transform="translate(-97.615 -420.665)"
              fill="url(#prefix__a)"
            />
            <Path
              d="M173.99 489.034a.694.694 0 00-.2.387.566.566 0 00-.011.09v.084a.3.3 0 00.006.075.681.681 0 00.022.11c.007.026.013.041.013.041l.014-.041c.008-.026.017-.063.028-.106l.017-.069.019-.076.02-.08c.007-.027.014-.054.023-.081l.025-.079c.008-.026.019-.051.027-.076s.019-.048.03-.069.02-.043.03-.061a.946.946 0 01.054-.09l.025-.034a.2.2 0 00-.042.013.36.36 0 00-.1.062z"
              transform="translate(-99.613 -419.926)"
              fill="url(#prefix__bG)"
            />
            <Path
              d="M173.269 488.965a.779.779 0 00-.055-.116.6.6 0 00-.021.128 1.082 1.082 0 00.019.274 1.062 1.062 0 00.084.261.607.607 0 00.066.112.717.717 0 00.009-.129 1.407 1.407 0 00-.027-.27 1.471 1.471 0 00-.075-.26z"
              transform="translate(-99.174 -419.844)"
              fill="url(#prefix__bH)"
            />
            <Path
              d="M171.93 490.769a.469.469 0 00-.032-.069.5.5 0 00-.045-.069.654.654 0 00-.057-.063c-.021-.019-.043-.037-.066-.054s-.047-.029-.07-.042-.047-.021-.069-.03a.518.518 0 00-.065-.018.454.454 0 00-.1-.014h-.038l.031.021.036.021c.014.007.029.018.046.028l.053.033.056.039c.02.013.037.03.057.044l.055.049c.017.018.035.034.051.052s.033.035.046.054l.04.054a.375.375 0 01.033.052 1.144 1.144 0 01.062.117.208.208 0 000-.038.385.385 0 00-.009-.1.489.489 0 00-.015-.067z"
              transform="translate(-97.819 -421.018)"
              fill="url(#prefix__y)"
            />
            <Path
              d="M173.657 489.693a.488.488 0 00-.143.234.493.493 0 00-.017.072.469.469 0 00-.009.07v.125a.566.566 0 00.018.087l.01.032s0-.012.011-.032.013-.049.022-.083c0-.017.01-.035.014-.055s.011-.039.015-.06.01-.042.016-.063.011-.043.018-.064l.02-.063.022-.06c.007-.02.015-.038.023-.055l.023-.049a.761.761 0 01.043-.071.328.328 0 01.02-.026.133.133 0 00-.033.01.281.281 0 00-.073.051z"
              transform="translate(-99.396 -420.435)"
              fill="url(#prefix__bI)"
            />
            <Path
              d="M173.087 489.639a.615.615 0 00-.044-.092.46.46 0 00-.016.1.895.895 0 00.081.423.467.467 0 00.052.088.581.581 0 00.007-.1 1.2 1.2 0 00-.081-.419z"
              transform="translate(-99.05 -420.369)"
              fill="url(#prefix__bJ)"
            />
            <Path
              d="M173.968 488.851c-.01-.032-.023-.061-.034-.09a.708.708 0 00-.04-.075.559.559 0 00-.075-.1.758.758 0 00-.032-.035s0 .018.009.047.007.032.012.052l.014.067.016.077c0 .028.008.056.014.085s0 .06.01.09 0 .061 0 .093v.092c0 .03 0 .061-.009.089s-.01.057-.014.084-.011.052-.018.075a1.437 1.437 0 01-.052.159.271.271 0 00.039-.029.478.478 0 00.083-.1.586.586 0 00.077-.166.633.633 0 00.023-.1.784.784 0 00.008-.107c0-.036 0-.072-.009-.107s-.014-.069-.022-.101z"
              transform="translate(-99.611 -419.618)"
              fill="url(#prefix__bK)"
            />
            <Path
              d="M174.691 490.6a.62.62 0 00-.338.076.638.638 0 00-.08.048.582.582 0 00-.072.055.747.747 0 00-.061.057 1.088 1.088 0 00-.049.056.694.694 0 00-.064.093l-.021.038.039-.019c.024-.012.056-.032.1-.053.02-.011.041-.022.062-.036s.045-.025.068-.039l.072-.041c.025-.014.049-.028.074-.04l.074-.037.073-.033a.623.623 0 01.07-.027l.065-.022a.949.949 0 01.1-.023l.042-.005a.2.2 0 00-.038-.021.367.367 0 00-.116-.027z"
              transform="translate(-99.787 -421.161)"
              fill="url(#prefix__B)"
            />
            <Path
              d="M174.456 489.622a1.074 1.074 0 00-.129.242.613.613 0 00-.034.125.729.729 0 00.1-.083 1.438 1.438 0 00.174-.208 1.458 1.458 0 00.135-.235.781.781 0 00.045-.121.58.58 0 00-.106.075 1.076 1.076 0 00-.185.205z"
              transform="translate(-100.003 -420.215)"
              fill="url(#prefix__bL)"
            />
          </G>
          <Path
            d="M173.363 478.015a.12.12 0 00.07.1.376.376 0 00.342 0 .121.121 0 00.071-.1V473.2h-.483z"
            transform="translate(-99.303 -408.068)"
            fill="url(#prefix__bM)"
          />
          <Path
            d="M174.155 492.461a.121.121 0 01-.071.1.382.382 0 01-.31.015l1.413.821.345-.2-1.376-.8z"
            transform="translate(-99.613 -422.514)"
            opacity={0.43}
            fill="url(#prefix__U)"
            style={{
              mixBlendMode: "multiply",
              isolation: "isolate",
            }}
          />
          <Path
            d="M170.731 471.117l-1.86-3.289-1.661 3.289c-.2.367-.055.785.447 1.077a2.867 2.867 0 002.6 0c.5-.291.658-.709.459-1.077z"
            transform="translate(-94.608 -404.025)"
            fill="url(#prefix__B)"
          />
          <Path
            d="M171.425 468.212l-1.525-2.692-1.359 2.692c-.166.3-.045.643.366.881a2.349 2.349 0 002.131 0c.413-.239.538-.581.376-.881z"
            transform="translate(-95.623 -402.289)"
            fill="url(#prefix__B)"
          />
          <Path
            d="M172.178 465.824l-1.157-2.046-1.033 2.046c-.126.229-.034.489.278.67a1.785 1.785 0 001.62 0c.314-.181.409-.441.286-.67z"
            transform="translate(-96.723 -400.978)"
            fill="url(#prefix__B)"
          />
          <Path
            d="M172.382 474a1.785 1.785 0 01-1.62 0 .876.876 0 01-.169-.126.746.746 0 00.263.24 1.784 1.784 0 001.62 0 .78.78 0 00.254-.222l-.078-.138a.752.752 0 01-.27.246z"
            transform="translate(-97.219 -408.487)"
            opacity={0.57}
            fill="url(#prefix__bN)"
            style={{
              mixBlendMode: "multiply",
              isolation: "isolate",
            }}
          />
          <Path
            d="M171.64 478.962a2.35 2.35 0 01-2.131 0 1.137 1.137 0 01-.241-.183 1 1 0 00.335.3 2.349 2.349 0 002.131 0 1.015 1.015 0 00.342-.3l-.079-.139a.985.985 0 01-.357.322z"
            transform="translate(-96.222 -412.157)"
            opacity={0.57}
            fill="url(#prefix__bO)"
            style={{
              mixBlendMode: "multiply",
              isolation: "isolate",
            }}
          />
        </G>
        <G transform="translate(94.335 61.697)">
          <Path
            d="M268.006 489.549a.587.587 0 00-.041-.088.652.652 0 00-.057-.087.813.813 0 00-.072-.08c-.027-.024-.055-.047-.083-.068s-.06-.037-.089-.053-.06-.027-.088-.038a.674.674 0 00-.082-.023.576.576 0 00-.125-.018h-.048s.014.011.04.027.028.018.046.027.037.023.058.036l.067.042c.022.016.046.033.071.049s.047.038.072.056l.069.062c.021.022.045.043.064.066s.041.045.058.068l.051.068a.43.43 0 01.042.066 1.465 1.465 0 01.078.148.252.252 0 00.006-.048.491.491 0 00-.012-.127.552.552 0 00-.025-.085z"
            transform="translate(-264.34 -481.724)"
            fill="url(#prefix__an)"
          />
          <Path
            d="M270.192 488.186a.617.617 0 00-.181.3.606.606 0 00-.021.091.561.561 0 00-.011.09.734.734 0 000 .084.3.3 0 00.006.075.662.662 0 00.022.11c.007.026.013.041.013.041l.014-.041c.008-.026.017-.063.028-.106l.017-.069.019-.076c.006-.027.013-.053.021-.08s.014-.054.023-.081l.025-.08.027-.076c.008-.025.019-.048.03-.069l.03-.062a.89.89 0 01.055-.09l.025-.034a.181.181 0 00-.042.013.366.366 0 00-.1.06z"
            transform="translate(-266.337 -480.985)"
            fill="url(#prefix__ae)"
          />
          <Path
            d="M269.472 488.117a.771.771 0 00-.055-.116.577.577 0 00-.021.128 1.136 1.136 0 00.1.536.615.615 0 00.066.112.731.731 0 00.009-.129 1.4 1.4 0 00-.028-.27 1.44 1.44 0 00-.071-.261z"
            transform="translate(-265.899 -480.903)"
            fill="url(#prefix__bP)"
          />
          <Path
            d="M268.132 489.921a.451.451 0 00-.032-.069.468.468 0 00-.045-.069.616.616 0 00-.057-.063c-.021-.019-.043-.037-.066-.053s-.047-.029-.07-.042-.047-.021-.069-.03a.537.537 0 00-.065-.019.447.447 0 00-.1-.014h-.038l.032.021.036.022c.014.007.029.018.046.028l.053.033.056.039c.02.013.037.03.056.044l.055.048c.017.018.036.034.051.052a.7.7 0 01.046.054c.015.018.027.037.04.054s.023.035.033.052a1.153 1.153 0 01.062.117.238.238 0 000-.038.385.385 0 00-.01-.1.423.423 0 00-.014-.067z"
            transform="translate(-264.543 -482.076)"
            fill="url(#prefix__bQ)"
          />
          <Path
            d="M269.859 488.845a.49.49 0 00-.143.234.468.468 0 00-.017.072.446.446 0 00-.009.071.593.593 0 000 .066v.059a.518.518 0 00.018.087.337.337 0 00.01.032s0-.012.011-.032.013-.049.022-.083c0-.017.009-.035.014-.055l.015-.06.016-.063c.006-.021.011-.043.018-.064l.02-.063.022-.06c.007-.02.015-.038.023-.054l.024-.049a.7.7 0 01.043-.071.306.306 0 01.02-.026.141.141 0 00-.033.01.287.287 0 00-.074.049z"
            transform="translate(-266.121 -481.493)"
            fill="url(#prefix__bR)"
          />
          <Path
            d="M269.29 488.791a.6.6 0 00-.044-.092.465.465 0 00-.016.1.892.892 0 00.081.423.476.476 0 00.052.088.577.577 0 00.007-.1 1.22 1.22 0 00-.081-.419z"
            transform="translate(-265.775 -481.428)"
            fill="url(#prefix__bS)"
          />
          <Path
            d="M270.171 488c-.01-.032-.023-.062-.034-.09a.711.711 0 00-.04-.075.572.572 0 00-.074-.1.758.758 0 00-.032-.035s0 .018.009.048c0 .015.007.032.012.052l.014.066.016.077c0 .027.008.056.014.085s0 .06.01.09 0 .062 0 .093v.092a.864.864 0 01-.009.089c0 .029-.009.057-.014.084s-.011.052-.018.075a1.454 1.454 0 01-.052.159.276.276 0 00.038-.029.486.486 0 00.083-.1.538.538 0 00.043-.075.562.562 0 00.034-.091.606.606 0 00.023-.1.849.849 0 00.008-.107c0-.036 0-.072-.009-.107s-.014-.067-.022-.101z"
            transform="translate(-266.336 -480.676)"
            fill="url(#prefix__L)"
          />
          <Path
            d="M270.894 489.754a.622.622 0 00-.339.076.632.632 0 00-.08.048.6.6 0 00-.072.054c-.022.019-.044.037-.062.057l-.049.057a.651.651 0 00-.064.093c-.014.023-.021.038-.021.038l.039-.018c.025-.012.057-.032.1-.053.02-.011.041-.022.062-.036s.045-.025.068-.039l.072-.041c.025-.014.049-.028.074-.04l.074-.038c.024-.013.05-.021.073-.033s.048-.02.07-.027.045-.016.065-.021a.938.938 0 01.1-.024.379.379 0 01.042 0 .2.2 0 00-.038-.021.366.366 0 00-.114-.032z"
            transform="translate(-266.512 -482.219)"
            fill="url(#prefix__F)"
          />
          <Path
            d="M270.659 488.774a1.057 1.057 0 00-.129.242.6.6 0 00-.034.125.736.736 0 00.1-.083 1.435 1.435 0 00.174-.207 1.463 1.463 0 00.135-.235.771.771 0 00.045-.121.591.591 0 00-.106.074 1.081 1.081 0 00-.185.205z"
            transform="translate(-266.728 -481.274)"
            fill="url(#prefix__aq)"
          />
          <G>
            <Path
              d="M266.943 489.45a.588.588 0 00-.041-.088.624.624 0 00-.057-.087.814.814 0 00-.072-.08c-.027-.024-.055-.047-.083-.068s-.06-.037-.089-.053-.06-.026-.088-.038a.689.689 0 00-.082-.024.57.57 0 00-.125-.018h-.048l.04.027.046.028.058.036.067.042c.022.016.046.034.071.049s.046.038.072.056l.069.061c.021.023.045.043.064.066a.877.877 0 01.058.068c.019.023.034.046.051.068s.03.044.042.065a1.458 1.458 0 01.078.148.278.278 0 00.006-.048.489.489 0 00-.012-.128.557.557 0 00-.025-.082z"
              transform="translate(-263.541 -481.649)"
              fill="url(#prefix__bT)"
            />
            <Path
              d="M269.13 488.088a.618.618 0 00-.181.3.6.6 0 00-.021.091.58.58 0 00-.011.09.746.746 0 000 .084.3.3 0 00.006.075.66.66 0 00.022.11c.007.026.013.041.013.041l.014-.041c.008-.026.017-.063.028-.106l.017-.069.019-.076.021-.08c.008-.027.014-.054.023-.081l.025-.079.027-.076c.008-.025.019-.048.03-.069s.02-.043.03-.061a.9.9 0 01.055-.09.362.362 0 01.025-.034.186.186 0 00-.042.013.355.355 0 00-.1.058z"
              transform="translate(-265.539 -480.911)"
              fill="url(#prefix__z)"
            />
            <Path
              d="M268.409 488.019a.782.782 0 00-.055-.116.567.567 0 00-.021.128 1.125 1.125 0 00.1.536.6.6 0 00.066.111.72.72 0 00.009-.128 1.432 1.432 0 00-.028-.27 1.449 1.449 0 00-.071-.261z"
              transform="translate(-265.1 -480.829)"
              fill="url(#prefix__a)"
            />
            <Path
              d="M267.07 489.823a.463.463 0 00-.032-.069.5.5 0 00-.045-.069.619.619 0 00-.057-.063c-.021-.019-.043-.037-.066-.054s-.047-.029-.07-.042-.048-.021-.07-.03a.563.563 0 00-.065-.019.442.442 0 00-.1-.014h-.038l.032.021.036.022.046.028.052.033.056.039c.02.013.037.03.056.044l.055.048c.017.018.036.034.051.052a.705.705 0 01.046.054c.015.018.027.037.04.054s.023.035.033.052a1.119 1.119 0 01.062.117.223.223 0 000-.038.389.389 0 00-.01-.1.42.42 0 00-.012-.066z"
              transform="translate(-263.745 -482.002)"
              fill="url(#prefix__B)"
            />
            <Path
              d="M268.8 488.746a.487.487 0 00-.143.234.44.44 0 00-.017.072.434.434 0 00-.009.071.586.586 0 000 .066v.059a.511.511 0 00.018.087l.01.032s0-.012.011-.032.013-.049.022-.084c0-.017.009-.035.014-.054l.015-.06.016-.063c.005-.021.011-.043.018-.064l.02-.063.022-.06c.007-.02.015-.038.023-.055l.024-.048a.738.738 0 01.043-.071l.02-.027a.151.151 0 00-.033.01.279.279 0 00-.074.05z"
              transform="translate(-265.323 -481.418)"
              fill="url(#prefix__bG)"
            />
            <Path
              d="M268.228 488.692a.632.632 0 00-.044-.092.453.453 0 00-.016.1.892.892 0 00.081.423.489.489 0 00.052.088.558.558 0 00.007-.1 1.105 1.105 0 00-.022-.213 1.155 1.155 0 00-.058-.206z"
              transform="translate(-264.976 -481.353)"
              fill="url(#prefix__bU)"
            />
            <Path
              d="M269.108 487.9c-.01-.032-.023-.061-.034-.089a.68.68 0 00-.04-.075.577.577 0 00-.074-.1.758.758 0 00-.032-.035s0 .018.009.047.007.032.012.052l.014.066.016.077c0 .027.008.056.014.085s0 .06.01.09 0 .062 0 .092v.092a.883.883 0 01-.009.09c0 .029-.009.057-.014.084s-.011.052-.018.075a1.425 1.425 0 01-.052.159.278.278 0 00.039-.029.478.478 0 00.083-.1.526.526 0 00.043-.075.578.578 0 00.034-.09.607.607 0 00.023-.1.848.848 0 00.008-.107c0-.036 0-.072-.009-.107s-.015-.066-.023-.102z"
              transform="translate(-265.537 -480.602)"
              fill="url(#prefix__bV)"
            />
            <Path
              d="M269.831 489.656a.62.62 0 00-.339.076.837.837 0 00-.152.1.813.813 0 00-.062.057l-.049.057a.658.658 0 00-.064.093l-.021.038.039-.019c.025-.012.057-.032.1-.053l.062-.036c.021-.014.045-.025.068-.039l.072-.041c.025-.014.049-.028.074-.04l.074-.037c.024-.012.049-.021.073-.033s.048-.019.07-.027l.065-.021a.893.893 0 01.1-.023l.042-.005a.185.185 0 00-.038-.021.356.356 0 00-.114-.026z"
              transform="translate(-265.713 -482.146)"
              fill="url(#prefix__G)"
            />
            <Path
              d="M269.6 488.675a1.068 1.068 0 00-.129.243.6.6 0 00-.034.125.714.714 0 00.1-.083 1.413 1.413 0 00.174-.208 1.448 1.448 0 00.135-.235.774.774 0 00.045-.121.575.575 0 00-.106.074 1.073 1.073 0 00-.185.205z"
              transform="translate(-265.93 -481.2)"
              fill="url(#prefix__q)"
            />
          </G>
          <Path
            d="M268.5 477.069a.119.119 0 00.07.1.376.376 0 00.342 0 .122.122 0 00.072-.1v-4.815h-.484z"
            transform="translate(-265.229 -469.053)"
            fill="url(#prefix__bW)"
          />
          <Path
            d="M269.3 491.514a.121.121 0 01-.072.1.381.381 0 01-.31.015l1.413.821.345-.2-1.376-.8z"
            transform="translate(-265.539 -483.498)"
            opacity={0.43}
            fill="url(#prefix__bX)"
            style={{
              mixBlendMode: "multiply",
              isolation: "isolate",
            }}
          />
          <Circle
            cx={2.492}
            cy={2.492}
            r={2.492}
            transform="rotate(-45 4.255 1.762)"
            fill="url(#prefix__bY)"
          />
        </G>
        <G transform="translate(92.043 64.641)">
          <Path
            d="M254.573 497.273a.582.582 0 00-.041-.088.621.621 0 00-.057-.087.825.825 0 00-.072-.08c-.027-.024-.055-.047-.083-.068s-.06-.037-.089-.053-.06-.026-.088-.038a.666.666 0 00-.082-.024.578.578 0 00-.125-.018h-.048l.04.027.046.028c.018.009.037.023.058.036l.067.042c.023.016.046.033.071.049s.047.038.072.056l.069.062c.021.023.045.043.064.066a.894.894 0 01.058.068c.019.023.034.047.051.068s.03.044.042.066a1.374 1.374 0 01.078.148.261.261 0 00.006-.048.49.49 0 00-.012-.127.556.556 0 00-.025-.085z"
            transform="translate(-251.94 -490.48)"
            fill="url(#prefix__s)"
          />
          <Path
            d="M256.759 495.91a.692.692 0 00-.2.387.563.563 0 00-.011.09.837.837 0 000 .084.3.3 0 00.006.075.657.657 0 00.022.11c.007.026.013.041.013.041l.014-.041c.008-.026.017-.063.028-.106l.017-.069.019-.076.02-.08c.007-.027.014-.054.023-.081l.025-.08.027-.076c.008-.025.019-.048.03-.069l.03-.062a.938.938 0 01.055-.09c.015-.022.026-.034.026-.034a.187.187 0 00-.042.013.368.368 0 00-.102.064z"
            transform="translate(-253.937 -489.741)"
            fill="url(#prefix__n)"
          />
          <Path
            d="M256.039 495.841a.771.771 0 00-.055-.116.575.575 0 00-.021.128 1.133 1.133 0 00.1.536.621.621 0 00.066.112.723.723 0 00.009-.129 1.4 1.4 0 00-.028-.27 1.437 1.437 0 00-.071-.261z"
            transform="translate(-253.499 -489.659)"
            fill="url(#prefix__bZ)"
          />
          <Path
            d="M254.7 497.645a.463.463 0 00-.032-.069.472.472 0 00-.045-.069.617.617 0 00-.057-.063c-.021-.019-.043-.037-.066-.053s-.047-.029-.07-.042-.048-.021-.07-.03a.545.545 0 00-.065-.019.441.441 0 00-.1-.014h-.038l.032.021.036.022c.014.007.029.018.046.028l.053.033c.018.013.036.027.056.039s.037.03.056.044l.055.049c.017.018.036.034.051.052a.694.694 0 01.046.054c.015.018.027.037.04.054s.023.035.033.052a1.122 1.122 0 01.062.117.231.231 0 000-.038.382.382 0 00-.01-.1.435.435 0 00-.013-.068z"
            transform="translate(-252.143 -490.832)"
            fill="url(#prefix__G)"
          />
          <Path
            d="M256.427 496.568a.491.491 0 00-.143.234.5.5 0 00-.017.072.45.45 0 00-.009.071v.066c0 .021 0 .041.005.059a.514.514 0 00.018.087l.01.032s0-.012.011-.032.013-.049.022-.083c0-.017.01-.035.014-.055s.011-.039.015-.06.01-.042.016-.063.011-.043.018-.064l.02-.063.022-.06c.007-.02.015-.038.023-.055s.015-.034.023-.048a.661.661 0 01.043-.071l.02-.027a.158.158 0 00-.033.01.29.29 0 00-.078.05z"
            transform="translate(-253.721 -490.248)"
            fill="url(#prefix__ca)"
          />
          <Path
            d="M255.857 496.515a.61.61 0 00-.044-.092.458.458 0 00-.016.1.893.893 0 00.081.423.481.481 0 00.052.088.581.581 0 00.007-.1 1.219 1.219 0 00-.081-.419z"
            transform="translate(-253.375 -490.184)"
            fill="url(#prefix__K)"
          />
          <Path
            d="M256.737 495.726a.94.94 0 00-.034-.09.786.786 0 00-.04-.075.567.567 0 00-.074-.1.758.758 0 00-.032-.035s0 .018.009.047.007.033.012.052l.014.066.016.077c0 .027.008.056.014.085s.005.06.01.09v.185a.874.874 0 01-.009.089c0 .029-.009.057-.014.084s-.011.053-.018.076a1.455 1.455 0 01-.052.159.269.269 0 00.038-.029.5.5 0 00.083-.1.61.61 0 00.077-.166.615.615 0 00.023-.1.872.872 0 00.008-.107c0-.036 0-.072-.009-.107s-.013-.069-.022-.101z"
            transform="translate(-253.936 -489.432)"
            fill="url(#prefix__bk)"
          />
          <Path
            d="M257.461 497.478a.62.62 0 00-.338.076.861.861 0 00-.152.1c-.022.019-.044.037-.062.057l-.049.057a.645.645 0 00-.064.093l-.021.038.039-.018c.025-.012.056-.032.1-.053l.062-.036c.021-.014.045-.025.068-.039l.072-.041c.025-.014.049-.028.074-.04l.074-.037c.024-.012.05-.021.073-.033s.048-.02.07-.027.045-.016.065-.021a.934.934 0 01.1-.024.4.4 0 01.042-.005.2.2 0 00-.038-.021.363.363 0 00-.115-.026z"
            transform="translate(-254.112 -490.975)"
            fill="url(#prefix__F)"
          />
          <Path
            d="M257.226 496.5a1.076 1.076 0 00-.129.242.616.616 0 00-.034.125.714.714 0 00.1-.083 1.4 1.4 0 00.174-.208 1.424 1.424 0 00.135-.235.763.763 0 00.045-.121.592.592 0 00-.106.074 1.077 1.077 0 00-.185.206z"
            transform="translate(-254.328 -490.03)"
            fill="url(#prefix__I)"
          />
          <G>
            <Path
              d="M253.511 497.174a.587.587 0 00-.041-.088.628.628 0 00-.057-.087.817.817 0 00-.072-.08c-.027-.024-.055-.047-.083-.068s-.06-.037-.089-.053-.06-.026-.088-.038a.686.686 0 00-.082-.024.567.567 0 00-.125-.018h-.048s.014.011.04.027.028.018.046.027.037.023.058.036l.067.042c.023.016.046.034.071.049s.047.038.072.056l.069.061c.021.023.045.043.064.066a.891.891 0 01.058.069c.019.023.034.046.051.068s.03.044.042.065a1.453 1.453 0 01.078.148.248.248 0 00.006-.048.488.488 0 00-.012-.127.572.572 0 00-.025-.083z"
              transform="translate(-251.141 -490.405)"
              fill="url(#prefix__m)"
            />
            <Path
              d="M255.7 495.811a.619.619 0 00-.181.3.61.61 0 00-.021.091.565.565 0 00-.011.09.731.731 0 000 .084.3.3 0 00.006.075.657.657 0 00.022.11c.007.026.013.041.013.041l.014-.041c.008-.026.017-.063.028-.106l.017-.069.019-.076.02-.08c.007-.027.014-.054.023-.081l.025-.079.027-.076c.008-.025.019-.048.03-.069s.02-.043.03-.061a.922.922 0 01.055-.09l.025-.034a.191.191 0 00-.042.013.362.362 0 00-.099.058z"
              transform="translate(-253.138 -489.667)"
              fill="url(#prefix__N)"
            />
            <Path
              d="M254.976 495.743a.781.781 0 00-.055-.116.569.569 0 00-.021.128 1.132 1.132 0 00.1.536.591.591 0 00.066.111.721.721 0 00.009-.128 1.409 1.409 0 00-.028-.27 1.448 1.448 0 00-.071-.261z"
              transform="translate(-252.7 -489.585)"
              fill="url(#prefix__N)"
            />
            <Path
              d="M253.637 497.547a.48.48 0 00-.032-.069.473.473 0 00-.045-.069.586.586 0 00-.057-.063c-.021-.019-.043-.037-.066-.054s-.047-.029-.07-.042-.047-.021-.07-.03a.563.563 0 00-.065-.019.437.437 0 00-.1-.014h-.032l.032.021.036.022c.014.007.029.018.046.028l.053.033.056.039c.02.013.037.03.056.044l.055.049c.017.018.036.034.051.052a.687.687 0 01.046.054c.015.018.027.037.04.054s.024.035.033.052a1.138 1.138 0 01.062.117.236.236 0 000-.038.386.386 0 00-.01-.1.418.418 0 00-.019-.067z"
              transform="translate(-251.344 -490.758)"
              fill="url(#prefix__B)"
            />
            <Path
              d="M255.364 496.47a.487.487 0 00-.143.234.68.68 0 00-.026.143.6.6 0 000 .066v.059a.52.52 0 00.018.087l.01.032s0-.012.011-.032.013-.049.022-.084c0-.017.009-.035.014-.055l.015-.06.016-.063c.006-.021.011-.043.018-.064l.02-.063.022-.06c.007-.02.015-.038.023-.055l.024-.048a.758.758 0 01.043-.071l.02-.026a.15.15 0 00-.033.01.277.277 0 00-.074.05z"
              transform="translate(-252.922 -490.174)"
              fill="url(#prefix__cb)"
            />
            <Path
              d="M254.8 496.416a.6.6 0 00-.044-.092.454.454 0 00-.016.1.892.892 0 00.081.423.484.484 0 00.052.088.579.579 0 00.007-.1 1.13 1.13 0 00-.022-.213 1.145 1.145 0 00-.058-.206z"
              transform="translate(-252.576 -490.109)"
              fill="url(#prefix__cc)"
            />
            <Path
              d="M255.675 495.628c-.01-.032-.022-.061-.034-.09a.713.713 0 00-.04-.075.566.566 0 00-.074-.1.758.758 0 00-.032-.035s0 .018.009.047.007.032.012.052l.014.067.016.077c0 .027.008.056.014.085s0 .06.01.09v.185a.859.859 0 01-.009.09c0 .029-.009.057-.014.084s-.011.052-.018.075a1.416 1.416 0 01-.052.159.278.278 0 00.039-.029.484.484 0 00.083-.1.522.522 0 00.043-.075.592.592 0 00.034-.09.607.607 0 00.023-.1.854.854 0 00.008-.107c0-.036 0-.072-.009-.107s-.015-.071-.023-.103z"
              transform="translate(-253.136 -489.358)"
              fill="url(#prefix__cd)"
            />
            <Path
              d="M256.4 497.379a.619.619 0 00-.339.076.6.6 0 00-.08.048.577.577 0 00-.072.054.817.817 0 00-.062.057l-.049.056a.68.68 0 00-.064.093c-.014.023-.021.038-.021.038l.039-.019c.024-.012.057-.032.1-.053l.062-.036c.021-.014.045-.025.068-.039l.072-.041c.025-.014.049-.028.074-.04l.074-.037c.024-.012.05-.021.073-.033s.047-.02.07-.027.045-.016.065-.021a.884.884 0 01.1-.023l.042-.005a.2.2 0 00-.038-.021.366.366 0 00-.114-.027z"
              transform="translate(-253.313 -490.901)"
              fill="url(#prefix__s)"
            />
            <Path
              d="M256.164 496.4a1.06 1.06 0 00-.129.243.6.6 0 00-.034.125.723.723 0 00.1-.083 1.441 1.441 0 00.174-.208 1.462 1.462 0 00.135-.235.775.775 0 00.045-.121.585.585 0 00-.106.074 1.075 1.075 0 00-.185.205z"
              transform="translate(-253.529 -489.955)"
              fill="url(#prefix__F)"
            />
          </G>
          <Path
            d="M255.071 484.792a.119.119 0 00.07.1.377.377 0 00.342 0 .122.122 0 00.071-.1v-4.815h-.483z"
            transform="translate(-252.829 -477.809)"
            fill="url(#prefix__au)"
          />
          <Path
            d="M255.863 499.238a.122.122 0 01-.071.1.382.382 0 01-.31.015l1.413.821.344-.2-1.376-.8z"
            transform="translate(-253.139 -492.255)"
            opacity={0.43}
            fill="url(#prefix__bX)"
            style={{
              mixBlendMode: "multiply",
              isolation: "isolate",
            }}
          />
          <Circle cx={2.492} cy={2.492} r={2.492} fill="url(#prefix__f)" />
        </G>
        <G>
          <Path
            d="M241.14 505a.576.576 0 00-.041-.088.624.624 0 00-.057-.087.809.809 0 00-.072-.08c-.027-.024-.055-.047-.083-.068s-.06-.037-.089-.053-.06-.026-.088-.038a.682.682 0 00-.082-.024.566.566 0 00-.125-.018h-.048l.04.027.046.027c.018.009.037.023.058.036l.067.042c.022.016.046.033.071.049s.047.038.072.056l.069.061c.021.023.045.043.064.066a.862.862 0 01.058.068c.019.023.034.047.051.068s.03.044.042.066a1.407 1.407 0 01.078.148.276.276 0 00.006-.048.49.49 0 00-.012-.127.548.548 0 00-.025-.083z"
            transform="translate(-149.789 -431.651)"
            fill="url(#prefix__ce)"
          />
          <Path
            d="M243.326 503.634a.619.619 0 00-.181.3.608.608 0 00-.021.091.569.569 0 00-.011.09.81.81 0 000 .084c0 .026 0 .052.006.075a.656.656 0 00.022.11c.007.026.013.041.013.041l.014-.041c.008-.026.017-.063.028-.106l.017-.069.019-.076.02-.08c.007-.027.014-.054.023-.081l.025-.08c.009-.027.019-.05.027-.076s.019-.048.03-.069.02-.043.03-.061a.954.954 0 01.055-.09l.025-.034a.179.179 0 00-.042.013.359.359 0 00-.099.059z"
            transform="translate(-151.787 -430.912)"
            fill="url(#prefix__G)"
          />
          <Path
            d="M242.606 503.565a.8.8 0 00-.055-.116.574.574 0 00-.021.128 1.134 1.134 0 00.1.536.618.618 0 00.066.112.718.718 0 00.009-.129 1.41 1.41 0 00-.028-.27 1.447 1.447 0 00-.071-.261z"
            transform="translate(-151.348 -430.83)"
            fill="url(#prefix__bZ)"
          />
          <Path
            d="M241.266 505.369a.449.449 0 00-.032-.069.468.468 0 00-.045-.069.656.656 0 00-.056-.063c-.022-.019-.043-.037-.066-.053s-.047-.029-.07-.042-.047-.021-.07-.03a.561.561 0 00-.065-.019.443.443 0 00-.1-.014h-.038l.032.021.036.022c.014.007.029.018.046.029l.053.033.056.039c.02.013.037.03.056.044l.055.049c.017.018.036.034.051.052a.7.7 0 01.046.054c.015.018.027.037.04.054s.024.035.033.052a1.109 1.109 0 01.062.117.2.2 0 000-.038.372.372 0 00-.01-.1.421.421 0 00-.014-.069z"
            transform="translate(-149.992 -432.003)"
            fill="url(#prefix__bQ)"
          />
          <Path
            d="M242.994 504.292a.55.55 0 00-.16.306.452.452 0 00-.009.071v.125a.52.52 0 00.018.087l.01.032s0-.012.011-.032.013-.05.022-.084c0-.017.01-.035.014-.055s.011-.039.015-.06.01-.042.016-.063.011-.043.018-.064l.02-.063.022-.06c.007-.02.015-.038.024-.055l.023-.049a.714.714 0 01.043-.071l.02-.027a.156.156 0 00-.033.01.284.284 0 00-.074.052z"
            transform="translate(-151.57 -431.419)"
            fill="url(#prefix__s)"
          />
          <Path
            d="M242.424 504.239a.612.612 0 00-.044-.092.456.456 0 00-.016.1.893.893 0 00.081.423.478.478 0 00.052.088.58.58 0 00.007-.1 1.2 1.2 0 00-.081-.419z"
            transform="translate(-151.224 -431.355)"
            fill="url(#prefix__ao)"
          />
          <Path
            d="M243.3 503.45c-.01-.032-.023-.062-.034-.09a.761.761 0 00-.04-.075.572.572 0 00-.074-.1.758.758 0 00-.032-.035s0 .018.009.047.007.033.012.052l.014.066.016.077c0 .027.008.056.014.085s.005.06.01.09 0 .062 0 .093v.092a.88.88 0 01-.009.089c0 .029-.009.057-.014.084s-.011.052-.018.076a1.466 1.466 0 01-.052.159.286.286 0 00.038-.029.49.49 0 00.083-.1.532.532 0 00.043-.075.567.567 0 00.034-.09.6.6 0 00.023-.1.806.806 0 00.008-.107c0-.036 0-.072-.009-.107s-.009-.07-.022-.102z"
            transform="translate(-151.785 -430.603)"
            fill="url(#prefix__bP)"
          />
          <Path
            d="M244.028 505.2a.62.62 0 00-.338.076.864.864 0 00-.152.1.776.776 0 00-.061.057c-.018.02-.035.039-.049.057a.642.642 0 00-.064.093c-.014.023-.021.038-.021.038l.039-.018c.024-.012.056-.032.1-.053.02-.011.04-.022.062-.036s.045-.025.068-.039l.072-.041c.025-.014.049-.028.074-.04l.074-.037c.024-.012.05-.022.074-.033s.047-.02.07-.027l.065-.021a.938.938 0 01.1-.023l.042-.005a.191.191 0 00-.038-.021.358.358 0 00-.117-.027z"
            transform="translate(-151.961 -432.146)"
            fill="url(#prefix__a)"
          />
          <Path
            d="M243.793 504.221a1.076 1.076 0 00-.129.243.613.613 0 00-.034.125.72.72 0 00.1-.083 1.527 1.527 0 00.309-.443.768.768 0 00.045-.121.591.591 0 00-.106.074 1.074 1.074 0 00-.185.205z"
            transform="translate(-152.177 -431.201)"
            fill="url(#prefix__n)"
          />
          <G>
            <Path
              d="M240.078 504.9a.568.568 0 00-.041-.088.63.63 0 00-.057-.087.812.812 0 00-.072-.08c-.027-.024-.055-.047-.083-.068s-.06-.037-.089-.053-.06-.026-.088-.038a.73.73 0 00-.082-.023.572.572 0 00-.125-.018h-.048l.04.027c.013.008.028.018.046.027s.037.023.058.036l.067.042c.023.016.046.034.071.049s.047.038.072.056l.069.061c.021.022.045.043.064.066a.866.866 0 01.058.069c.019.023.034.046.051.068s.03.044.042.065a1.466 1.466 0 01.078.148.251.251 0 00.006-.048.487.487 0 00-.012-.127.564.564 0 00-.025-.084z"
              transform="translate(-148.99 -431.576)"
              fill="url(#prefix__y)"
            />
            <Path
              d="M242.264 503.535a.619.619 0 00-.181.3.6.6 0 00-.021.091.566.566 0 00-.011.09.806.806 0 000 .084.3.3 0 00.006.075.661.661 0 00.022.11c.007.026.013.041.013.041l.014-.041c.008-.026.017-.063.028-.106l.017-.069.019-.076.02-.08c.007-.027.014-.054.023-.081l.025-.08.027-.075c.008-.025.019-.048.03-.069s.02-.043.03-.061a.99.99 0 01.055-.09l.025-.034a.2.2 0 00-.042.013.361.361 0 00-.099.058z"
              transform="translate(-150.988 -430.837)"
              fill="url(#prefix__bA)"
            />
            <Path
              d="M241.544 503.467a.781.781 0 00-.055-.116.572.572 0 00-.021.128 1.134 1.134 0 00.1.536.616.616 0 00.066.111.717.717 0 00.009-.128 1.4 1.4 0 00-.028-.27 1.445 1.445 0 00-.071-.261z"
              transform="translate(-150.549 -430.756)"
              fill="url(#prefix__bP)"
            />
            <Path
              d="M240.2 505.271a.442.442 0 00-.032-.069.462.462 0 00-.045-.069.6.6 0 00-.057-.063c-.021-.019-.043-.037-.066-.054s-.047-.029-.07-.042-.047-.021-.07-.03a.516.516 0 00-.065-.019.446.446 0 00-.1-.014h-.038l.032.021.036.022c.014.007.029.018.046.028l.053.033c.018.013.036.027.056.039s.037.03.056.044l.055.049c.017.018.036.034.051.052a.706.706 0 01.046.054c.015.018.027.037.04.054s.023.035.033.052a1.146 1.146 0 01.062.117.23.23 0 000-.038.383.383 0 00-.01-.1.411.411 0 00-.013-.067z"
              transform="translate(-149.193 -431.929)"
              fill="url(#prefix__bI)"
            />
            <Path
              d="M241.931 504.194a.489.489 0 00-.143.234.478.478 0 00-.017.072.445.445 0 00-.009.071.612.612 0 000 .066v.059a.514.514 0 00.018.087l.01.032s0-.012.011-.032.013-.049.022-.084c0-.017.009-.035.014-.055s.011-.039.015-.06.01-.042.016-.063.011-.043.018-.064l.02-.063.022-.06c.007-.02.015-.038.023-.055l.024-.049a.747.747 0 01.043-.071l.02-.026a.152.152 0 00-.033.01.285.285 0 00-.074.051z"
              transform="translate(-150.771 -431.345)"
              fill="url(#prefix__cf)"
            />
            <Path
              d="M241.362 504.14a.606.606 0 00-.044-.092.471.471 0 00-.016.1.894.894 0 00.081.423.481.481 0 00.052.088.59.59 0 00.007-.1 1.122 1.122 0 00-.022-.213 1.15 1.15 0 00-.058-.206z"
              transform="translate(-150.425 -431.28)"
              fill="url(#prefix__cg)"
            />
            <Path
              d="M242.243 503.352c-.01-.032-.023-.061-.034-.09a.7.7 0 00-.04-.075.553.553 0 00-.074-.1.758.758 0 00-.032-.035s0 .018.009.047.007.032.012.052l.014.067.016.077c0 .027.008.056.014.085s0 .06.01.09v.185a.87.87 0 01-.009.089c0 .029-.009.057-.014.084s-.011.052-.018.075a1.429 1.429 0 01-.052.159.292.292 0 00.038-.029.482.482 0 00.083-.1.525.525 0 00.043-.075.56.56 0 00.034-.091.6.6 0 00.023-.1.866.866 0 00.008-.107c0-.036 0-.072-.009-.107s-.014-.069-.022-.101z"
              transform="translate(-150.986 -430.529)"
              fill="url(#prefix__L)"
            />
            <Path
              d="M242.966 505.1a.616.616 0 00-.338.076.6.6 0 00-.081.048.615.615 0 00-.072.055.82.82 0 00-.062.057l-.049.056a.692.692 0 00-.064.092l-.021.038.039-.019c.025-.012.056-.032.1-.053l.062-.036.068-.039.072-.041c.025-.014.049-.028.074-.04l.074-.037c.024-.012.05-.021.073-.033s.048-.02.07-.027l.065-.021a.906.906 0 01.1-.024l.042-.005a.2.2 0 00-.038-.021.358.358 0 00-.114-.026z"
              transform="translate(-151.162 -432.072)"
              fill="url(#prefix__s)"
            />
            <Path
              d="M242.731 504.123a1.059 1.059 0 00-.129.243.6.6 0 00-.034.125.712.712 0 00.1-.083 1.419 1.419 0 00.174-.207 1.473 1.473 0 00.135-.235.777.777 0 00.045-.121.582.582 0 00-.106.075 1.073 1.073 0 00-.185.203z"
              transform="translate(-151.378 -431.126)"
              fill="url(#prefix__ch)"
            />
          </G>
          <Path
            d="M241.638 492.516a.119.119 0 00.07.1.377.377 0 00.342 0 .121.121 0 00.071-.1V487.7h-.483z"
            transform="translate(-150.678 -418.979)"
            fill="url(#prefix__au)"
          />
          <Path
            d="M242.43 506.962a.121.121 0 01-.071.1.381.381 0 01-.31.015l1.413.821.344-.2-1.376-.8z"
            transform="translate(-150.988 -433.426)"
            opacity={0.43}
            fill="url(#prefix__ci)"
            style={{
              mixBlendMode: "multiply",
              isolation: "isolate",
            }}
          />
          <Path
            d="M235.074 478.94a2.492 2.492 0 102.492 2.493 2.492 2.492 0 00-2.492-2.493z"
            transform="translate(-143.864 -412.387)"
            fill="url(#prefix__cj)"
          />
        </G>
        <Path d="M80.499 52.126l.377.217 5.173-3.006v-.436z" fill="#bd481b" />
        <Path
          d="M86.047 49.337l5.214 3.01.377-.219-5.591-3.228z"
          fill="#df6d3e"
        />
        <Path
          d="M203.553 484.483l4.518 2.608.006-2.244-4.513-4.513z"
          transform="translate(-122.02 -413.437)"
          opacity={0.5}
          fill="url(#prefix__ck)"
          style={{
            mixBlendMode: "multiply",
            isolation: "isolate",
          }}
        />
      </G>
      <G fill="#009bdc">
        <Path d="M57.34 72.742v.617c0 .158-.083.206-.228.132l-1.318-.672v3.9c0 .158-.083.206-.227.132l-.717-.366a.4.4 0 01-.228-.364v-3.9l-1.317-.672a.4.4 0 01-.227-.364v-.617c0-.158.083-.206.227-.132l3.807 1.941a.4.4 0 01.228.365zM57.044 77.321a12.668 12.668 0 011.841-3.874.215.215 0 01.276-.025l.421.214a.647.647 0 01.276.306 35.948 35.948 0 011.828 5.745c.048.205-.021.275-.2.184l-.773-.394a.429.429 0 01-.221-.308c-.055-.269-.124-.56-.2-.877l-1.842-.939a8.36 8.36 0 00-.2.673c-.027.114-.11.139-.221.083l-.779-.4a.329.329 0 01-.206-.388zm2.959-.281a18.893 18.893 0 00-.641-2.012 8.088 8.088 0 00-.628 1.365zM67.79 83.085l-.724-.369a.419.419 0 01-.235-.368l-.083-2.7-.931 1.646c-.062.111-.179.134-.324.06l-.5-.253a.694.694 0 01-.324-.391l-.931-2.6-.083 2.612c-.007.154-.09.2-.235.128l-.731-.372a.38.38 0 01-.221-.361l.152-4.69c.007-.154.09-.2.234-.129l.731.373a.731.731 0 01.331.395l1.324 3.555 1.324-2.205c.069-.108.186-.131.331-.057l.724.369a.418.418 0 01.234.368l.152 4.845c.017.17-.071.219-.215.144zM72.991 84.872v.617c0 .158-.083.206-.228.132l-3.159-1.611a.4.4 0 01-.228-.364v-4.768c0-.158.083-.206.228-.132l3.021 1.54a.4.4 0 01.227.364v.617c0 .158-.083.206-.227.132l-2.076-1.059v.993l1.662.848a.4.4 0 01.228.364v.609c0 .158-.083.206-.228.132l-1.662-.847v.94l2.214 1.129a.4.4 0 01.228.364zM77.689 87.266v.617c0 .158-.083.206-.227.132l-3.159-1.61a.4.4 0 01-.228-.364v-4.768c0-.158.083-.206.228-.132l3.021 1.54a.4.4 0 01.228.364v.617c0 .158-.083.206-.228.132l-2.076-1.058v.992l1.662.848a.4.4 0 01.228.364v.609c0 .158-.083.206-.228.132l-1.662-.847v.94l2.214 1.129a.4.4 0 01.227.363zM82.896 90.261a.717.717 0 01-.945.112 2.975 2.975 0 01-1.283-2.211 1.892 1.892 0 01-.179-.084l-.545-.278v1.233c0 .158-.083.206-.227.132l-.718-.366a.4.4 0 01-.227-.364v-4.768c0-.158.083-.206.227-.132l1.7.865a3.5 3.5 0 011.959 2.894c0 .767-.4 1.127-1 1.122a6.521 6.521 0 001.238 1.845zm-2.359-3.263c.627.32.91.239.91-.318a1.342 1.342 0 00-.91-1.246l-.593-.3v1.564z" />
      </G>
      <G fill="#8aba2b">
        <Path d="M90.859 86.047a3.228 3.228 0 01-2.015 2.643l-.59.273v.994a.348.348 0 01-.219.32l-.689.319c-.14.065-.219.022-.219-.118v-4.2a.348.348 0 01.219-.32l1.5-.693c1.085-.509 2.013-.318 2.013.782zm-1.16.537c0-.537-.338-.579-.875-.331l-.57.264v1.472l.57-.264a1.256 1.256 0 00.875-1.145zM95.917 86.645l-.928.43a.28.28 0 01-.338-.029 5.343 5.343 0 00-1.624-1.131v1.829a.347.347 0 01-.219.32l-.689.319c-.139.064-.219.022-.219-.118v-4.2a.349.349 0 01.219-.32l.689-.319c.14-.065.219-.022.219.117v1.8a24.842 24.842 0 001.478-2.534.742.742 0 01.338-.342l.749-.346c.173-.08.219-.022.126.16a26.454 26.454 0 01-1.664 2.832 6.569 6.569 0 011.975 1.266c.1.088.061.186-.112.266z" />
      </G>
    </Svg>
  );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;

