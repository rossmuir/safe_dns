initSidebarItems({"enum":[["EitherOrBoth","A value yielded by `ZipLongest`. Contains one or two values, depending on which of the input iterators are exhausted."]],"fn":[["assert_equal","Assert that two iterators produce equal sequences, with the same semantics as *equal(a, b)*."],["enumerate","Iterate `iterable` with a running index."],["equal","Return `true` if both iterators produce equal sequences (elements pairwise equal and sequences of the same length), `false` otherwise."],["linspace","Return an iterator of evenly spaced floats."],["partition","Partition a sequence using predicate `pred` so that elements that map to `true` are placed before elements which map to `false`."],["rev","Iterate `iterable` in reverse."]],"macro":[["iproduct!","Create an iterator over the “cartesian product” of iterators."],["izip!","Create an iterator running multiple iterators in lockstep."]],"mod":[["misc","A module of helper traits and iterators that are not intended to be used directly."],["size_hint","Arithmetic on **Iterator** *.size_hint()* values."]],"struct":[["Batching","A “meta iterator adaptor”. Its closure recives a reference to the iterator and may pick off as many elements as it likes, to produce the next iterator element."],["Chunk","An iterator for the elements in a single chunk."],["Chunks","An iterator that yields the Chunk iterators."],["ChunksLazy","`ChunkLazy` is the storage for a lazy chunking operation."],["Coalesce","An iterator adaptor that may join together adjacent elements."],["Combinations","An iterator to iterate through all the combinations of pairs in a `Clone`-able iterator."],["Dedup","An iterator adaptor that removes repeated duplicates."],["Format","Format all iterator elements lazily, separated by `sep`."],["Group","An iterator for the elements in a single group."],["GroupBy","An iterator adaptor that groups iterator elements. Consecutive elements that map to the same key (“runs”), are returned as the iterator elements."],["GroupByLazy","`GroupByLazy` is the storage for the lazy grouping operation."],["Groups","An iterator that yields the Group iterators."],["ISlice","An iterator adaptor that yields a subset (a slice) of the base iterator."],["Interleave","An iterator adaptor that alternates elements from two iterators until both run out."],["InterleaveShortest","An iterator adaptor that alternates elements from the two iterators until one of them runs out."],["Intersperse","An iterator adaptor to insert a particular value between each element of the adapted iterator."],["Linspace","An iterator of a sequence of evenly spaced floats."],["MendSlices","An iterator adaptor that glues together adjacent contiguous slices."],["Merge","An iterator adaptor that merges the two base iterators in ascending order. If both base iterators are sorted (ascending), the result is sorted."],["MergeBy","An iterator adaptor that merges the two base iterators in ascending order. If both base iterators are sorted (ascending), the result is sorted."],["MultiPeek","An iterator adaptor that allows the user to peek at multiple *.next()* values without advancing itself."],["PadUsing","An iterator adaptor that pads a sequence to a minimum length by filling missing elements using a closure."],["Product","An iterator adaptor that iterates over the cartesian product of the element sets of two iterators `I` and `J`."],["PutBack","An iterator adaptor that allows putting back a single item to the front of the iterator."],["PutBackN","An iterator adaptor that allows putting multiple items in front of the iterator."],["RcIter","A wrapper for `Rc<RefCell<I>>`, that implements the `Iterator` trait."],["RepeatCall","An iterator source that produces elements indefinitely by calling a given closure."],["RepeatN","An iterator that repeats an element exactly *n* times."],["Step","An iterator adaptor that steps a number elements in the base iterator for each iteration."],["Stride","An iterator similar to the slice iterator, but with a certain number of steps (the stride) skipped per iteration."],["StrideMut","The mutable equivalent of Stride."],["TakeWhileRef","An iterator adaptor that borrows from a `Clone`-able iterator to only pick off elements while the predicate returns `true`."],["Tee","One half of an iterator pair where both return the same elements."],["Unfold","`Unfold` is a general iterator builder: it has a mutable state value, and a closure with access to the state that produces the next value."],["Unique","An iterator adapter to filter out duplicate elements."],["UniqueBy","An iterator adapter to filter out duplicate elements."],["WhileSome","An iterator adaptor that filters `Option<A>` iterator elements and produces `A`. Stops on the first `None` encountered."],["Zip","An iterator that generalizes *.zip()* and allows running multiple iterators in lockstep."],["ZipLongest","An iterator which iterates two other iterators simultaneously"],["ZipSlices","An iterator which iterates two slices simultaneously."]],"trait":[["Itertools","The trait `Itertools`: extra iterator adaptors and methods for iterators."]],"type":[["MapFn","The function pointer map iterator created with `.map_fn()`."]]});