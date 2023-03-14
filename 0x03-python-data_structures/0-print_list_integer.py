//0-print_list_integer.rs

fn print_list_integer(my_list: &[i32]) {
    for num in my_list {
        println!("{}", num);
    }
}


fn main() {
    let my_list = vec![1, 2, 3, 4, 5];
    print_list_integer(&my_list);
}

