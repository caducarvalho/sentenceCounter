import React from "react";

const TextArea = ({
  value,
  valueHandler,
}: {
  value: string;
  valueHandler: (e?: any) => void;
}) => (
  <div className="flex flex-col gap-1">
    <label htmlFor="inputText" className="block text-xs text-gray-400">
      Original text
    </label>
    <textarea
      className="block min-h-[160px] sm:min-h-[300px] resize-none sm:resize-y p-2 text-xs rounded-md ring-1 ring-inset ring-gray-300 shadow-sm"
      value={value}
      onChange={({ target }: any) => valueHandler(target.value)}
      placeholder="Teste de placeholder"
    />
  </div>
);

export default TextArea;
