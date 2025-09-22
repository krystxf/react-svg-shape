interface NpmIconProps {
  className?: string;
}

export const NpmIcon = ({ className = "w-5 h-5" }: NpmIconProps) => {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0H1.763zm.177 2.177h20.12v19.646H1.94V2.177zm1.763 1.763v16.12h16.594V3.94H3.703zm1.177 1.177h14.24v13.766H4.88V5.117zm1.177 1.177v11.412h11.886V6.294H6.057zm1.177 1.177h9.532v9.058H7.234V7.471zm1.177 1.177v6.704h7.178V8.648H8.411zm1.177 1.177h4.824v4.35H9.588V9.825zm1.177 1.177v2.996h2.47v-2.996h-2.47z" />
    </svg>
  );
};
