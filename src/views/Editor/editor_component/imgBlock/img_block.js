import "../imgBlock/img_block.css";

export default class imgBlock {
  static get toolbox() {
    return {
      title: 'imgBlock',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m8.25 3v6.75m0 0l-3-3m3 3l3-3M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" /></svg>'
    }
  }

  constructor({ data }) {
    this.data = data;
    this.img_container = undefined;
  }

  render() {
    // 包含內容物的區塊
    this.img_container = document.createElement("div");
    this.img_container.classList.add("img_container");

    // 內容物區塊-排列處理
    const img_form = document.createElement("section");
    img_form.classList.add("img_form");

    // 圖片-標題輸入
    const title_input = document.createElement("input");
    title_input.classList.add("title_input");
    title_input.type = "text";
    title_input.placeholder = "請輸入圖片標題";

    // 圖片-內容輸入
    const cnt_input = document.createElement("textarea");
    cnt_input.rows = "10";
    cnt_input.cols = "60";
    cnt_input.classList.add("cnt_input");
    cnt_input.placeholder = "請輸入文字內容";

    // 圖片-照片上傳
    const photo_input = document.createElement("input");
    photo_input.classList.add("photo_input");
    photo_input.type = "file";
    photo_input.accept = "image/*"
    photo_input.placeholder="請選擇圖片檔案";

    // 上傳按鈕
    const img_button = document.createElement("button");
    img_button.classList.add("img_button");
    img_button.textContent = "送出";
    
    // 將input放入區塊內
    img_form.appendChild(title_input);
    img_form.appendChild(cnt_input);
    img_form.appendChild(photo_input);
    img_form.appendChild(img_button);
    this.img_container.appendChild(img_form)

    // 將資料傳遞到createImgBlock函數
    img_button.addEventListener('click',(e)=>{
      this.createImgBlock(title_input.value,cnt_input.value,photo_input.value);
    })

    return this.img_container;
  }

  createImgBlock(title,content,photo) {
    const img_box = document.createElement("div");
    img_box.classList.add("img_box");

    // 圖片前置區塊
    const innerBox = document.createElement("div");
    innerBox.classList.add("innerBox");

    const text_title = document.createElement("h2");
    text_title.classList.add("text_title");
    text_title.textContent = title;

    const image = document.createElement("img");
    image.classList.add("image");
    image.src = photo;

    innerBox.appendChild(text_title);
    innerBox.appendChild(image);

    // 圖片後置區塊
    const text_box = document.createElement("div");
    text_box.classList.add("text_box");
    
    const text_content = document.createElement("span");
    text_content.classList.add("text_content");
    text_content.textContent = content;

    text_box.appendChild(text_content);

    // 整合區塊
    img_box.appendChild(innerBox);
    img_box.appendChild(text_box);

    this.img_container.innerHTML = "";
    this.img_container.appendChild(img_box);

  }

  save(blockContent) {
    return {
      url: blockContent.value
    }
  }
}

// paragraph_textarea.value = this.data && this.data.url ? this.data.url : "";