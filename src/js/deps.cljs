{:foreign-libs [{:file        "base64-js/base64-js.js"
                 :provides    ["feross.base64-js"]
                 :module-type :commonjs}
                {:file        "ieee754/ieee754.js"
                 :provides    ["feross.ieee754"]
                 :module-type :commonjs}
                {:file        "buffer/buffer.js"
                 :provides    ["feross.buffer"]
                 :requires    ["feross.base64-js" "feross.ieee754"]
                 :module-type :commonjs}]}
