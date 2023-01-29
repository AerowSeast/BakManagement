import '../paragraph/sample_paragraph.css';

export default class SampleParagraph {
  static get toolbox() {
    return {
      title: 'Paragraph',
      icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" /></svg>'
    }
  }

  constructor({ data }) {
    this.data = data;
    this.paragraph = undefined;
  }

  render() {
    // paragraph區塊
    this.paragraph = document.createElement("div");
    this.paragraph.classList.add("paragraph")

    // paragraph內容輸入
    const paragraph_textarea = document.createElement("textarea");
    paragraph_textarea.classList.add("paragraph_textarea");
    paragraph_textarea.placeholder = "請輸入段落內容";
    paragraph_textarea.rows = '10';
    paragraph_textarea.cols = '60';
    paragraph_textarea.value = this.data && this.data.url ? this.data.url : "";
    
    paragraph_textarea.addEventListener("paste",(e)=>{
      this.createParagraph(e.clipboardData.getData('text'));
    })

    this.paragraph.appendChild(paragraph_textarea);

    return this.paragraph;
  }

  createParagraph(text) {
    const par_content = document.createElement("p");
    par_content.classList.add("par_content");
    par_content.textContent = text;

    // 傳遞內容物給save()函數
    this.save(text);

    this.paragraph.innerHTML = '';
    this.paragraph.appendChild(par_content);
  }

  save(paragraphCnt) {
    return {
      text:paragraphCnt.value
    }
  }
}

