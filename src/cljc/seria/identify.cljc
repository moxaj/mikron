(ns seria.identify
  "Identifier function generation.")

{:body     [:record {:user-data [:record {:id :int}]
                     :position  :coord
                     :angle     :float
                     :body-type [:enum [:dynamic :static :kinetic]]
                     :fixtures  [:list :fixture]}]
 :fixture  [:record {:user-data [:record {:color :int}]
                     :coords    [:list :coord]}]
 ;:coord    [:tuple [:float :float]]
 :snapshot [:record {:time   :long
                     :bodies [:list :body]}]}

(comment
  snapshot-route

  :vector?
    :coord
  :time
    :snapshot
  :position
    :body
  :else

  !!! :ignored schema for marking unused fields - helps when identifying schemas)

#{:byte :ubyte :short :ushort :int :uint :long :float :double
  :char :boolean :varint
  :string :keyword :symbol :any :ignored
  :list :vector :set :map :tuple :record :optional :multi :enum}

(comment
  [:list :x ]  [list? x? x? ...]
  [:vector :x] [vector? x? x? ...]
  [:set :x]    [set? x? x? ...]
  [:map :x :y] [map? x? y? x? y? ...]

  [:tuple [:x1 :xn]]        [vector? x1? xn?]
  [:record {:k1 :x1 :kn :xn}] [map? x1? xn?]
  [:optional :x]) [nil? x?]

  input: schemas, output: identifier
   schemas -> condition-lists
     value + (map first condition-lists) -> remaining schemas
     condition-lists -> (map next condition-lists)
