<template>
    <el-form :inline="true" :model="formImage">
        <el-row class="home" gutter="20" style="padding:15px 0 0 20px;margin:0">
            <el-col :span="4">
            </el-col>
            <el-col :span="16">

                <el-form-item label="分頁名稱：">
                    <el-input placeholder="請輸入分頁名稱" />
                </el-form-item>

                <!-- Editor 顯示位置 -->
                <div id="editorjs"></div>

                <!-- 儲存按鈕 -->
                <div class="editor_btn">
                    <el-button class="btn" type="primary" @click="backBranch">儲存</el-button>
                </div>
            </el-col>
            <el-col :span="4"></el-col>
        </el-row>
    </el-form>
</template>

<script>
import { useRouter } from 'vue-router';
// 整塊編輯器
import EditorJS from '@editorjs/editorjs';
// 編輯器中功能
import Header from '@editorjs/header';
import List from '@editorjs/list';
import NestedList from '@editorjs/nested-list';
import LinkTool from '@editorjs/link';
import SimpleImage from '@editorjs/simple-image';
import ImageTool from '@editorjs/image';
import Embed from '@editorjs/embed';
import Quote from '@editorjs/quote';
import Marker from '@editorjs/marker';
import Table from '@editorjs/table';
import AttachesTool from '@editorjs/attaches';

// 個別創作導入-JS引入
import SampleFile from './editor_component/file/simple_file';
import Expandable from './editor_component/Expandable/Expandable';
import ImgBlock from './editor_component/imgBlock/img_block';
import Sample_paragraph from './editor_component/paragraph/sample_paragraph';

// 等待新增其他功能
export default {
    setup() {
        const router = useRouter();

        const editor = new EditorJS({
            autofocus: true,
            tools: {
                header: {
                    class: Header,
                    inlineToolbar: true,
                    shortcut: 'CMD+SHIFT+H',
                    config: {
                        placeholder: "請輸入標題",
                        levels: [1, 2, 3, 4, 5, 6],
                        defaultLevel: 1
                    }
                },
                list: {
                    class: List,
                    inlineToolbar: ["unordered", "ordered"],
                    config: {
                        defaultStyle: "unordered"
                    }
                },
                nestedList: {
                    class: NestedList,
                    inlineToolbar: true,
                },
                link: {
                    class: LinkTool,
                    config: {
                        endpoint: 'http://localhost:5173/',
                    }
                },
                simpleImage: {
                    class: SimpleImage,
                    inlineToolbar: true,
                },
                image: {
                    class: ImageTool,
                    inlineToolbar: true,
                },
                embed: {
                    class: Embed,
                    inlineToolbar: true,
                    config: {}
                },
                quote: {
                    class: Quote,
                    inlineToolbar: true,
                    shortcut: 'CMD+SHIFT+O',
                    config: {
                        quotePlaceholder: '輸入引述',
                        captionPlaceholder: '引述作者',
                    }
                },
                marker: {
                    class: Marker,
                    shortcut: 'CMD+SHIFT+M'
                },
                table: {
                    class: Table,
                    inlineToolbar: true,
                    config: {
                        rows: 2,
                        cols: 3
                    }
                },
                attachesTool: {
                    class: AttachesTool,
                    config: {
                        endpoint: "http://localhost:5173/editor"
                    }
                },
                sampFile: SampleFile,
                expandable: Expandable,
                imgBlock: ImgBlock,
                sample_paragraph: Sample_paragraph
            }
        })


        const backBranch = () => {
            // save editor
            editor.save().then((outputData) => {
                console.log(outputData)
            }).catch((error) => {
                console.log('Saving failed: ', error)
            });
            router.push({
                path: "/branch"
            })
        }
        return {
            editor,
            backBranch
        }
    }
}
</script>

<style lang="less" scoped>
#editorjs {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: .8rem 1rem;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
    color: black;
}

.editor_btn {
    display: flex;
    justify-content: flex-end;

    .btn {
        padding: 18px 30px;
        font-size: 1.4rem;
        margin-top: 15px;
    }
}
</style>