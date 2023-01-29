import "../file/simple_file.css"

export default class SampleFile {
  static get toolbox() {
    return {
      title: 'File',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>'
    }
  }

  constructor({ data }) {
    this.data = data;
    this.wrapper = undefined;
  }

  render() {
    this.wrapper = document.createElement("div");
    this.wrapper.classList.add("linkBlock");
    const link_input = document.createElement("input");
    link_input.classList.add("link_input");
    link_input.placeholder = "請貼上連結(URL)";
    link_input.value = this.data && this.data.url ? this.data.url : "";
    this.wrapper.appendChild(link_input);

    link_input.addEventListener('paste', (e) => {
      // 執行函數，將參數帶給createLink函數'
      this.createLink(e.clipboardData.getData('text'));
    })

    return this.wrapper;
  }

  createLink(url) {
    // 整個檔案架構
    const file_container = document.createElement("div");
    file_container.classList.add("file_container");

    const column = document.createElement("div");
    column.classList.add("column");

    const file_row = document.createElement("section");
    file_row.classList.add("file_row");

    const file_title = document.createElement("div");
    file_title.classList.add("file_title");

    const a_title = document.createElement("a");
    a_title.classList.add("a_title");
    a_title.innerHTML = url;
    a_title.href = url;

    file_title.appendChild(a_title);
    file_row.appendChild(file_title);
    column.appendChild(file_row);
    file_container.appendChild(column);

    // 檔案內部詳細內容
    const allDescribe = document.createElement("section");
    allDescribe.classList.add("file_row");

    const s_title = document.createElement("div");
    s_title.classList.add("s_title");
    s_title.innerText = "PDF";
    const capacity = document.createElement("div");
    capacity.classList.add("capacity");
    capacity.innerText = "大小：4KB";
    const p_item = document.createElement("div");
    p_item.classList.add("p_item");
    p_item.innerText = "描述"

    allDescribe.appendChild(s_title);
    allDescribe.appendChild(capacity);
    allDescribe.appendChild(p_item);

    file_container.appendChild(allDescribe);

    this.wrapper.innerHTML = "";
    this.wrapper.appendChild(file_container);
  }

  save(blockContent) {
    return {
      url: blockContent.value
    }
  }
}

