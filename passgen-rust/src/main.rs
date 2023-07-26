use rand::Rng;

fn generar_pass(longitud: usize) -> String {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}[]=<>";
    let mut pass = String::new();
    let mut rng = rand::thread_rng();
    for _ in 0..longitud {
        let random_index = rng.gen_range(0..chars.len());
        pass.push(chars.chars().nth(random_index).unwrap());
    }
    pass
}

fn main() {
    let args: Vec<String> = std::env::args().skip(1).collect();
    if args.len() != 1 {
        println!("Inserta un número válido para la longitud de la contraseña.");
        std::process::exit(1);
    }
    let longitud = match args[0].parse::<usize>() {
        Ok(num) => num,
        Err(_) => {
            println!("Inserta un número válido para la longitud de la contraseña.");
            std::process::exit(1);
        }
    };
    println!("{}", generar_pass(longitud));
}