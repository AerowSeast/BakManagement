import "../Expandable/Expandable.css";

export default class Expandable {
  static get toolbox() {
    return {
      title: 'Expandable',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>'
    }
  }

  constructor({ data }) {
    this.data = data;
    this.wrap = undefined;
  }

  render() {
    this.wrap = document.createElement("div");
    this.wrap.classList.add("wrap");

    // title_input 輸入框
    const expandable_title = document.createElement("input");
    expandable_title.classList.add("expandable_title");
    expandable_title.placeholder = "請輸入文字標題"
    expandable_title.type = "text";

    // content_input 輸入框
    const expandable_cnt = document.createElement("textarea");
    expandable_cnt.classList.add("expandable_cnt");
    expandable_cnt.placeholder = "請輸入文字內容"
    expandable_cnt.rows = "10";
    expandable_cnt.cols = "60";

    // 送出按鈕
    const expandable_btn = document.createElement("button");
    expandable_btn.classList.add("expandable_btn");
    expandable_btn.textContent = "送出";

    // 整合輸入框
    const expandable = document.createElement("section");
    expandable.classList.add("expandable");
    expandable.appendChild(expandable_title);
    expandable.appendChild(expandable_cnt);
    expandable.appendChild(expandable_btn);

    // 將資料傳遞給createExpandable
    expandable_btn.addEventListener('click', () => {
      this.createExpandable(expandable_title.value, expandable_cnt.value)
    })

    this.wrap.appendChild(expandable);

    return this.wrap;
  }


  createExpandable(title, content) {
    const accordions = document.createElement("div");
    accordions.classList.add("accordions");

    // 輸出標題區塊
    const accord_title = document.createElement("h1");
    accord_title.classList.add("accord_title");
    accord_title.innerText = title;

    const par_box = document.createElement("div");
    par_box.classList.add("par_box");

    // 輸出內容區塊
    const par_content = document.createElement("p");
    par_content.classList.add("par_content");
    par_content.textContent = content;

    // 整合區塊
    accordions.appendChild(accord_title);
    par_box.appendChild(par_content);

    // 執行展開收縮效果
    (function () {
      let wraps = document.querySelectorAll('.wrap');
      wraps.forEach(wrap => {
        wrap.addEventListener('click', () => {
          wrap.classList.toggle('active');
        })
      })
    })();

    this.wrap.innerHTML = "";
    this.wrap.appendChild(accordions);
    this.wrap.appendChild(par_box);
  }

  save(blockContent) {
    return {
      url: blockContent.value
    }
  }
}
