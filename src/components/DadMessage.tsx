const DadMessage: React.FC<{text: string}> = (props) => {
    return (
        <div className="flex flex-row items-center p-2 mr-5">
          <img src="data:image/png;base64,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" alt="avatar"
               className="rounded-full w-16 h-16 p-1 mr-7" />
          <div className="relative min-w-[110px] min-h-[50px] bg-amber-500 rounded-[10px] flex justify-center items-center text-white text-xl p-3">
            {props.text}
            <div className="absolute w-0 h-0 border-t-[13px] border-t-transparent border-b-[13px] border-b-transparent border-r-[26px] border-r-amber-500 right-[100%] top-[50%] translate-y-[-50%]" />
          </div>
        </div>
      );
};

export default DadMessage;