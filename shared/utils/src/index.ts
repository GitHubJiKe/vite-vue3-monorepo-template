import html2canvas from "html2canvas";

export function sayHello(name: string) {
  alert(`hello ${name}`);
}

export function isMobileDevice() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

export function downloadPicture(
  element: HTMLElement,
  { endfix, filename }: { endfix: "jpeg" | "png"; filename: string }
) {
  html2canvas(element, { useCORS: true, logging: true }).then(function (
    canvas
  ) {
    // 将Canvas转换为DataURL
    const imageDataURL = canvas.toDataURL(`image/png`);

    // 创建一个链接元素
    const downloadLink = document.createElement("a");
    downloadLink.href = imageDataURL;

    // 设置链接的下载属性和名称
    downloadLink.download = `${filename}.${endfix}`;

    // 将链接元素添加到文档中
    document.body.appendChild(downloadLink);

    // 触发点击事件，自动下载图片
    downloadLink.click();

    // 移除链接元素
    document.body.removeChild(downloadLink);
  });
}

export function saveSVG(svgElement: Node, filename: string) {
  // 获取 SVG 元素的 XML 字符串
  const svgXML = new XMLSerializer().serializeToString(svgElement);

  // 将 SVG XML 字符串转换为 Blob
  const blob = new Blob([svgXML], { type: "image/svg+xml" });

  // 创建一个链接元素
  const downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(blob);

  // 设置链接的下载属性和名称
  downloadLink.download = filename + ".svg";

  // 将链接元素添加到文档中
  document.body.appendChild(downloadLink);

  // 触发点击事件，自动下载图片
  downloadLink.click();

  // 移除链接元素
  document.body.removeChild(downloadLink);
}
