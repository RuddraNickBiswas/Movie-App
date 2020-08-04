import React from 'react'
import './loaderSvg.style.css'



const LoaderSvg = ({message}) =>{
    return ( <div className="strock">
     
    <svg id="logo" width="277" height="343" viewBox="0 0 277 343" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M91.2013 1.79321C67.8006 1.79321 47.0183 4.6017 28.8529 10.2165C10.347 15.9965 1.36993 26.3168 1.92196 41.1795C2.22256 49.2715 5.07475 56.0425 10.4773 61.4922C11.9131 62.8133 12.89 63.474 13.41 63.474C13.93 63.474 14.1881 63.3921 14.182 63.227L13.0683 61.2452C12.4992 59.924 11.4715 57.9419 9.98665 55.2996C7.36977 50.1803 5.97164 45.2258 5.79377 40.4367C5.31534 27.5556 13.4795 18.6386 30.2827 13.6844C39.2043 11.2073 48.5791 9.30704 58.4103 7.9859C68.2415 6.66477 78.6188 6.00407 89.5391 6.00407C113.286 6.00407 135.93 8.97815 157.471 14.9232C179.533 20.8683 196.644 28.8771 208.805 38.9507C224.346 51.3364 232.423 65.7866 233.037 82.3008C233.681 99.6407 225.098 113.594 207.29 124.163C197.116 130.273 184.397 135.475 169.129 139.769C161.403 141.751 154.35 143.238 147.973 144.229C141.77 145.219 135.977 145.549 130.591 145.219C127.261 144.228 125.149 143.403 124.258 142.743C123.534 141.917 122.652 141.504 121.612 141.504C118.145 141.504 116.476 143.238 116.605 146.706C116.826 152.651 122.219 164.872 132.787 183.368C143.354 201.864 151.222 213.01 156.39 216.809C164.046 222.258 170.647 224.983 176.194 224.983C180.007 224.983 183.526 224.075 186.752 222.258C187.947 221.763 188.619 221.184 188.768 220.524C188.935 220.358 188.666 220.111 187.961 219.781H186.662C186.321 219.946 185.807 220.111 185.12 220.276C182.897 221.102 180.659 221.515 178.406 221.515C173.206 221.515 167.554 218.707 161.452 213.092C155.709 207.808 149.367 198.064 142.426 183.862C136.041 170.651 132.012 160.165 130.337 152.403C129.911 150.256 130.305 149.182 131.518 149.182C138.439 148.852 145.515 148.027 152.747 146.706C159.978 145.385 167.537 143.569 175.425 141.257C189.486 137.128 200.929 132.587 209.759 127.633C232.526 115.247 243.545 99.2278 242.815 79.5759C242.171 62.236 232.321 46.712 213.265 33.0052C200.261 23.5921 182.473 15.9966 159.897 10.2166C138.195 4.6018 115.295 1.79332 91.2013 1.79332V1.79321ZM153.428 53.0706C152.041 53.0706 151.375 53.8133 151.43 55.2995C151.436 55.4646 151.627 55.8778 151.998 56.5384C153.118 58.6852 152.756 60.6674 150.917 62.4839C95.5828 140.761 69.3629 183.863 72.2574 191.789C72.851 193.771 74.7079 194.761 77.828 194.761C81.1214 194.761 82.6515 193.937 82.4168 192.285C81.7373 187.992 83.9686 180.394 89.1107 169.495C94.426 158.596 102.907 144.229 114.551 126.394C121.761 115.164 129.061 104.016 136.45 92.9511C144.012 81.8866 151.484 70.7399 158.867 59.5103C159.703 58.6846 158.772 56.9518 156.074 54.3095C155.177 53.4838 154.295 53.0706 153.428 53.0706V53.0706Z" stroke="white" strokeWidth="3"/>
      <path d="M252.528 80.1586C253.91 82.3055 255.605 84.2876 257.615 86.1042C259.798 87.9208 261.614 90.0685 263.063 92.5456C264.684 95.0228 265.571 98.1589 265.723 101.957C266.103 105.59 265.039 110.463 262.533 116.573C261.609 118.885 260.102 122.189 258.013 126.482C255.978 130.611 253.608 135.234 250.905 140.353C248.254 145.308 245.463 150.428 242.532 155.712C239.602 160.997 236.892 165.868 234.402 170.327C231.967 174.62 229.86 178.171 228.081 180.979C226.475 183.786 225.586 185.189 225.412 185.189C223.121 190.639 221.991 195.18 222.024 198.814C222.283 202.282 222.992 205.172 224.147 207.484C225.53 209.631 227.16 211.282 229.038 212.438C231.089 213.594 232.959 214.502 234.651 215.162C227.862 216.318 221.899 218.135 216.76 220.612C211.848 222.924 207.249 226.144 202.96 230.272C198.725 234.236 194.628 239.108 190.669 244.888C186.71 250.668 182.375 257.605 177.665 265.697C171.845 275.605 166.354 284.77 161.19 293.192C156.026 301.614 150.631 308.88 145.005 314.991C139.379 321.101 133.342 325.808 126.895 329.111C120.394 332.579 113.011 334.23 104.744 334.064L101.191 341C103.444 341 105.897 340.918 108.55 340.753C111.151 340.753 113.945 340.423 116.933 339.763C120.095 339.102 123.504 337.945 127.161 336.293C130.764 334.807 134.667 332.661 138.873 329.854C143.36 326.716 147.407 323.331 151.014 319.697C154.622 316.064 157.965 312.184 161.04 308.055C164.115 303.927 167.15 299.385 170.147 294.431C173.09 289.642 176.195 284.356 179.461 278.576C185.054 268.833 190.045 260.411 194.433 253.31C198.994 246.209 203.612 240.264 208.289 235.475C213.192 230.521 218.554 226.558 224.373 223.586C230.193 220.613 237.244 218.384 245.528 216.897L246.791 215.41C240.077 212.602 235.343 209.3 232.591 205.502C229.892 201.539 230.318 195.428 233.868 187.171L270.488 119.298C273.758 111.371 275.25 105.179 274.966 100.72C274.682 96.2614 273.523 92.6283 271.489 89.8209C270.399 87.8392 269.003 86.2703 267.298 85.1143C265.594 83.9583 263.808 83.05 261.943 82.3894C260.077 81.7289 258.246 81.232 256.447 80.9017C254.821 80.5715 253.514 80.3239 252.528 80.1587L252.528 80.1586Z" stroke="white" strokeWidth="3"/>
      <path d="M80.5187 73.6781C76.7811 73.6781 72.7875 74.0495 68.5391 74.7926C63.0478 75.7834 57.7634 79.1689 52.6852 84.9489C49.9433 88.0866 47.7787 91.4721 46.1913 95.1052C44.5658 98.5732 43.2948 102.454 42.3801 106.747C41.6005 110.876 41.0905 115.417 40.8484 120.372C40.5681 125.161 40.4017 130.446 40.3503 136.226C40.1745 145.97 39.7806 154.392 39.1678 161.493C38.7282 168.594 37.4338 174.622 35.285 179.576C33.2713 184.365 30.1815 188.246 26.0147 191.219C21.848 194.191 16.0361 196.421 8.57927 197.907L8.40176 199.393C16.5039 202.2 23.0073 205.586 27.9097 209.549C32.774 213.348 35.8122 219.374 37.0264 227.631L37.8869 295.505C39.0248 303.431 40.9757 309.625 43.7392 314.084C46.676 318.543 49.8549 322.176 53.2769 324.983C55.4681 326.965 57.7384 328.532 60.0855 329.688C62.606 330.844 64.9816 331.754 67.2143 332.415C69.447 333.076 71.4497 333.487 73.2212 333.652C75.0309 333.982 76.475 334.23 77.5532 334.395C74.9771 332.248 72.0925 330.268 68.8995 328.451C65.9179 326.8 62.9273 324.736 59.9283 322.259C57.1027 319.782 54.5575 316.644 52.2933 312.845C50.0673 309.212 48.5076 304.34 47.616 298.229C47.0818 295.917 46.7146 292.45 46.513 287.826C46.3496 283.367 46.1769 278.495 45.9961 273.21L45.8602 256.861C45.7764 251.246 45.7581 246.292 45.8061 241.998C46.0276 237.705 46.1315 234.403 46.1174 232.091C46.2767 229.779 46.4708 229.118 46.6997 230.109C45.7493 224.494 44.2466 219.869 42.1939 216.236C40.1412 212.603 37.8274 209.714 35.2513 207.567C32.6372 205.255 29.983 203.521 27.2892 202.365C24.7688 201.209 22.4795 200.301 20.4202 199.64C26.5667 198.484 31.4533 196.749 35.0793 194.437C38.8405 191.96 41.7361 188.741 43.7672 184.777C45.7602 180.649 47.1288 175.694 47.8736 169.914C48.6183 164.134 49.0969 157.199 49.3075 149.107C49.6185 139.199 50.0147 130.033 50.4957 121.61C50.9767 113.188 52.3298 105.922 54.5583 99.8119C56.7868 93.7016 60.207 88.9947 64.8175 85.6919C69.3898 82.2239 75.8553 80.573 84.2137 80.7381L84.1718 73.8026C82.9827 73.72 81.7646 73.678 80.5187 73.678L80.5187 73.6781Z" stroke="white" strokeWidth="3"/>
      <path d="M90.2862 239.895C90.2862 243.307 87.3613 246.195 83.5986 246.195C79.8358 246.195 76.9109 243.307 76.9109 239.895C76.9109 236.483 79.8358 233.594 83.5986 233.594C87.3613 233.594 90.2862 236.483 90.2862 239.895Z" stroke="white" strokeWidth="3"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M79.0595 284.054C80.0345 285.089 81.1947 285.897 82.4243 286.63C84.1043 287.461 85.765 288.326 87.439 289.168C89.338 290.157 91.2222 291.157 93.1916 292.013C95.0979 292.843 97.1235 293.238 99.1732 293.571C100.881 293.843 102.611 293.918 104.338 293.958C105.754 293.968 107.171 293.968 108.587 293.982C110.327 293.965 111.87 293.744 113.518 293.221C114.93 292.852 116.241 292.25 117.544 291.63C117.71 291.541 117.872 291.445 118.041 291.364C118.539 291.125 119.064 290.95 119.559 290.704C119.743 290.611 119.924 290.512 120.106 290.415C118.886 291.079 117.666 291.742 116.445 292.405C117.659 291.771 118.74 290.954 119.808 290.124L124.455 288.347C123.364 289.17 122.32 290.059 121.086 290.692C118.612 292.066 116.227 293.477 113.635 294.606C112.336 295.21 111 295.73 109.607 296.105C107.965 296.562 106.295 296.747 104.584 296.753C103.162 296.764 101.739 296.781 100.317 296.726C98.5882 296.661 96.8581 296.55 95.1527 296.258C93.0856 295.913 91.0679 295.415 89.1579 294.561C87.1792 293.684 85.2382 292.742 83.3293 291.734C81.6495 290.881 79.9687 290.03 78.2912 289.174C77.7786 288.879 77.2586 288.597 76.7776 288.255C76.0551 287.741 75.4392 287.098 74.7016 286.601L79.0595 284.057L79.0595 284.054Z" stroke="white" strokeWidth="3"/>
      <path d="M135.998 251.349C135.882 251.36 135.782 251.381 135.7 251.415C135.612 251.508 135.578 251.606 135.599 251.71C135.653 251.801 135.701 251.914 135.741 252.048C135.799 252.042 135.862 252.063 135.931 252.11C136.026 252.165 136.165 252.212 136.351 252.249C136.831 252.504 137.264 252.73 137.649 252.93C138.068 253.116 138.373 253.301 138.565 253.486C138.929 253.751 139.407 254.175 140.002 254.759C140.597 255.342 141.225 255.998 141.884 256.724C142.57 257.459 143.265 258.246 143.972 259.085C144.712 259.91 145.394 260.695 146.021 261.435C146.673 262.183 147.238 262.854 147.716 263.448L148.793 264.785C148.988 265.043 149.087 265.257 149.086 265.427C149.093 265.574 149.064 265.699 149.002 265.8C148.969 265.813 148.519 265.847 147.651 265.901C146.783 265.956 145.685 266.02 144.358 266.093C143.057 266.175 141.638 266.267 140.103 266.369C138.575 266.449 137.148 266.525 135.821 266.598C134.519 266.68 133.421 266.744 132.528 266.79C131.635 266.836 131.177 266.853 131.151 266.845L127.78 267.266C128.476 267.301 129.554 267.339 131.011 267.382C132.502 267.411 134.159 267.448 135.985 267.49C137.811 267.533 139.696 267.569 141.638 267.601C143.588 267.611 145.37 267.614 146.985 267.611C148.625 267.617 149.976 267.601 151.037 267.561C152.124 267.53 152.711 267.467 152.799 267.375C153.486 266.849 153.556 266.351 153.007 265.88C152.669 265.793 152.459 265.746 152.375 265.743C152.324 265.726 152.226 265.682 152.08 265.61L151.655 265.361C151.568 265.284 151.478 265.171 151.388 265.02C150.401 264.089 149.33 263.032 148.174 261.851C147.024 260.647 145.887 259.448 144.763 258.253C143.665 257.067 142.636 255.965 141.679 254.947C140.747 253.937 139.985 253.14 139.39 252.556C139.208 252.424 138.956 252.291 138.633 252.16C138.342 252.016 137.999 251.856 137.606 251.678C137.112 251.467 136.709 251.36 136.399 251.355C136.248 251.341 136.115 251.339 135.998 251.349V251.349Z" stroke="white" strokeWidth="3"/>
      <path d="M130.687 245.752C130.457 245.752 130.233 245.848 130.011 246.042C128.445 247.425 126.743 249.161 124.907 251.248C123.096 253.335 121.111 255.773 118.954 258.564C114.284 264.655 112.108 268.515 112.424 270.14C112.556 270.577 112.67 270.869 112.765 271.015C112.918 271.015 112.981 270.76 112.954 270.251C112.917 269.377 113.466 267.993 114.597 266.1C115.754 264.207 117.481 261.805 119.78 258.893C121.854 256.248 123.805 253.905 125.631 251.867C127.482 249.828 129.217 248.081 130.838 246.625C131.077 246.407 131.171 246.212 131.12 246.042C131.06 245.848 130.916 245.752 130.687 245.752V245.752Z" stroke="white" strokeWidth="3"/>
      </svg>
      
{message ? <h2>{message}</h2> : "" }
      
  </div>)
}




export default LoaderSvg;