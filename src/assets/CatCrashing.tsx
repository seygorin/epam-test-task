interface CatSittingProps {
  color: string;
  /* eslint-disable react/require-default-props */
  size?: number;
}

const DEFAULT_SIZE = 60;

function CatCrashing({ color, size = DEFAULT_SIZE }: CatSittingProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 115 100"
      width={size}
      height={size}
    >
      <g>
        <path
          fill={color}
          d="M37.448,9.672c-0.054,0.008-0.108,0.012-0.161,0.012c-0.482,0-0.906-0.35-0.985-0.839V8.842c0,0-0.062-0.389-0.277-1.045   C35.313,5.785,33.501,2.009,28.199,2c-0.753,0-1.582,0.076-2.497,0.253c-0.543,0.105-1.066-0.251-1.171-0.792   c-0.105-0.543,0.249-1.066,0.792-1.173C26.356,0.092,27.31,0,28.199,0c4.27-0.02,6.923,2.166,8.318,4.283   c1.418,2.118,1.742,4.158,1.757,4.241C38.366,9.07,37.993,9.582,37.448,9.672z"
        />
        <path
          fill={color}
          d="M95.889,10.423c-0.038,0-0.06,0-0.073,0c-0.551,0.022-1.015-0.407-1.038-0.96c-0.021-0.551,0.409-1.017,0.961-1.039   c0.063-0.002,0.114-0.002,0.15-0.002c3.43-0.029,5.497,1.606,6.441,3.323c0.966,1.702,1.002,3.38,1.007,3.797   c0,0.071-0.003,0.122-0.007,0.149c-0.047,0.52-0.484,0.91-0.995,0.91c-0.03,0-0.061-0.001-0.091-0.004   c-0.55-0.049-0.955-0.537-0.906-1.086h0.001c-0.001-0.301-0.077-1.625-0.745-2.775C99.883,11.557,98.727,10.455,95.889,10.423z"
        />
        <path
          fill={color}
          d="M97.014,5.968c-0.24,0-0.486,0.007-0.74,0.019c-0.552,0.028-1.021-0.395-1.049-0.945c-0.03-0.553,0.395-1.022,0.944-1.051   c0.294-0.017,0.575-0.023,0.845-0.021c5.151-0.031,8.06,2.514,9.411,5.017c1.378,2.495,1.415,4.882,1.421,4.97   c0.014,0.553-0.427,1.01-0.979,1.02c-0.007,0.001-0.013,0.001-0.02,0.001c-0.545,0-0.989-0.435-1.002-0.981h0.002   c0,0-0.008-0.461-0.161-1.231C105.142,10.402,103.681,6.01,97.014,5.968z"
        />
        <path
          fill={color}
          d="M7.436,35.321c0.416-0.364,1.05-0.321,1.411,0.095c0.365,0.414,0.321,1.046-0.095,1.41h0.002c0,0-0.082,0.069-0.249,0.254   c-0.517,0.549-1.523,1.908-1.508,3.51c0.007,1.063,0.386,2.316,1.791,3.804c0.385,0.399,0.369,1.032-0.032,1.414   c-0.193,0.184-0.441,0.274-0.689,0.274c-0.265,0-0.528-0.104-0.726-0.309c-1.693-1.764-2.353-3.588-2.345-5.184   C5.036,37.361,7.372,35.403,7.436,35.321z"
        />
        <path
          fill={color}
          d="M3.125,33.178c0.397-0.387,1.028-0.379,1.415,0.02c0.384,0.395,0.375,1.025-0.019,1.412c0,0-0.131,0.126-0.369,0.412   c-0.725,0.863-2.164,2.973-2.15,5.527c0.008,1.879,0.714,4.076,3.22,6.523c0.398,0.387,0.406,1.02,0.023,1.415   c-0.197,0.202-0.459,0.304-0.72,0.304c-0.252,0-0.503-0.094-0.698-0.282c-2.82-2.726-3.836-5.536-3.825-7.96   C0.03,36.144,3.062,33.262,3.125,33.178z"
        />
        <path
          fill={color}
          d="M14.65,31.293l0.398,6.253l-0.161,3.303l3.024,4.241c-0.893,1.744-1.776,3.768-1.348,4.24   c0.285,0.315,1.251,0.079,2.362-0.346c-0.821,1.649-1.557,3.43-1.157,3.869c0.487,0.539,2.963-0.527,4.761-1.408l10.502,0.232   l7.841,2.102l-0.001-0.041c3.424,0.65,29.153,5.18,42.331-2.773c0.634-0.182,1.336-0.373,2.107-0.564   c3.323-0.83,7.791-1.649,12.23-1.647c5.169-0.007,10.149,1.114,13.524,4.16c0.477,0.427,1.074,0.637,1.668,0.637   c0.687,0,1.37-0.281,1.864-0.833c0.921-1.029,0.832-2.611-0.198-3.531c-4.775-4.242-11.045-5.428-16.858-5.434   c-2.854,0.006-5.634,0.299-8.166,0.711c0.764-1.566,1.268-3.343,1.464-5.35c0.063-0.075,0.104-0.125,0.104-0.125   s7.197-9.82,7.59-11.82C98.905,25.25,85.834,8.803,82.758,8.992c-0.137,0.01-0.261,0.038-0.355,0.114   c-0.804,0.648-1.479,2.564-0.116,3.923c10.526,10.501,0.919,12.777-0.236,13.046c-1.806,0.421-10.302,3.538-8.295,10.64   c0.979,3.463,2.255,5.615,3.667,6.869c-2.379-0.532-4.637-2.78-6.168-8.202c-1.524-5.397,3.012-8.49,6.072-9.851l-0.273-0.199   c0,0-23.637-5.489-34.624,0.808C37.359,20.978,25.19,9.109,22.72,11.337c-2.168,1.956,5.678,11.772,11.47,18.642   c0.297,0.353,0.59,0.699,0.875,1.035l0.9,7.668l-4.403-8.427l-5.315,0.421l-3.18-2.281l-2.188-0.621l-5.689,2.629L14.65,31.293z    M17.098,36.496c0.283-0.838,1.191-1.287,2.028-1.002c0.839,0.281,1.286,1.191,1.001,2.029c-0.283,0.835-1.191,1.281-2.03,0.998   C17.26,38.242,16.811,37.334,17.098,36.496z"
        />
      </g>
    </svg>
  );
}

export default CatCrashing;
