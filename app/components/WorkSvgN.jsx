import { motion } from 'framer-motion';

const WorkSvg = (props) => (
  <svg
    // width={384}
    // height={339}
    viewBox="0 0 384 339"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g id="work 1">
      <motion.path
        initial={{opacity: 0, y:80}}
        animate={{y:5, opacity: 1}}
        transition={{type:'spring', y:{delay:2.5,}, opacity:{delay:2, duration: 0.1}}}
        id="handle"
        d="M249.108 52.9119L224.78 52.7471C224.78 48.6284 224.834 44.6744 224.78 40.7753C224.725 35.3934 221.045 31.714 215.608 31.6042C211.874 31.5493 208.14 31.6042 204.351 31.6042C191.939 31.6042 179.473 31.6042 167.062 31.6042C162.01 31.6042 158.056 34.7894 157.781 39.4573C157.507 43.7957 157.726 48.189 157.726 52.7471L133.014 53.1315C133.124 51.7586 133.179 50.7152 133.233 49.6718C133.453 44.5645 133.069 39.3474 133.947 34.35C136.803 18.4791 150.258 7.44086 166.623 7.27611C182.878 7.11136 199.188 7.05644 215.499 7.16627C234.555 7.33102 248.888 21.7741 249.108 40.8302C249.108 44.7842 249.108 48.7382 249.108 52.9119Z"
        stroke="#4fa0d3"
        fill="#4fa0d3"
        strokeWidth={10}
        strokeMiterlimit={10}
      />
      <motion.path
        initial={{opacity: 0, x:100}}
        animate={{x:10, opacity: 1}}
        transition={{type:'spring', x:{delay:2,}, opacity:{delay:2, duration: 0.1}}}
        id="left"
        d="M79.6348 69.4968C79.6348 157.034 79.6348 244.297 79.6348 331.889C78.5913 331.889 77.6028 331.889 76.6143 331.889C64.8073 331.889 53.0002 331.889 41.1931 331.889C21.1485 331.834 6.70543 317.446 6.65051 297.456C6.65051 232.764 6.65051 168.072 6.65051 103.38C6.65051 84.0497 21.1485 69.5517 40.5341 69.4968C52.6158 69.4419 64.6974 69.4968 76.7791 69.4968C77.7127 69.4968 78.5913 69.4968 79.6348 69.4968Z"
        stroke="#4fa0d3"
        fill="#4fa0d3"
        strokeWidth={10}
        strokeMiterlimit={10}
      />
      <motion.path
        initial={{opacity: 0, x:-100}}
        animate={{x:-10, opacity: 1}}
        transition={{type:'spring', x:{delay:2}, opacity:{delay:2, duration: 0.1}}}
        id="right"
        d="M302.816 69.6065C317.04 69.6065 331.043 69.2221 345.047 69.7164C361.522 70.3205 375.141 84.8185 375.636 101.458C375.745 105.467 375.691 109.531 375.691 113.54C375.691 174.937 375.691 236.334 375.691 297.73C375.691 314.48 364.927 327.825 348.836 331.175C346.695 331.614 344.498 331.834 342.301 331.834C329.78 331.889 317.259 331.889 304.683 331.889C304.134 331.889 303.585 331.834 302.871 331.779C302.816 244.296 302.816 156.924 302.816 69.6065Z"
        stroke="#4fa0d3"
        fill="#4fa0d3"
        strokeWidth={10}
        strokeMiterlimit={10}
      />
      <motion.path
        initial={{scale:0.8, pathLength: 0, fillOpacity: 0}}
        animate={{scale: 1, pathLength: 1, fillOpacity: 1}}
        transition={{duration: 1, fillOpacity:{delay:1, duration: 1}}}
        id="mid"
        d="M249.108 69.3869L224.779 69.2222H157.671L132.959 69.6066H101.272V331.669H280.959V69.3869H249.108Z"
        stroke="var(--blue)"
        fill="var(--blue)"
        strokeWidth={10}
        strokeMiterlimit={10}
      />
    </g>
  </svg>
)
export default WorkSvg
