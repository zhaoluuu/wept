export function blendColors(t,n){const o=t[3];return[(1-o)*n[0]+o*t[0],(1-o)*n[1]+o*t[1],(1-o)*n[2]+o*t[2],o+n[3]*(1-o)]}export function rgbaToHsla([t,n,o,a]){const r=Math.max(t,n,o),e=Math.min(t,n,o),c=r-e,u=r+e;let i;i=e===r?0:t===r?(1/6*(n-o)/c+1)%1:n===r?1/6*(o-t)/c+1/3:1/6*(t-n)/c+2/3;const l=.5*u;let s;return s=0===l||1===l?0:l<=.5?c/u:c/(2-u),[i,s,l,a]}export function luminance([t,n,o]){return.2126*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.7152*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.0722*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))}export function contrastRatio(t,n){const o=luminance(blendColors(t,n)),a=luminance(n);return(Math.max(o,a)+.05)/(Math.min(o,a)+.05)}