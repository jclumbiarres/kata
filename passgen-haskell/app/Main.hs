import System.Environment
import System.Exit
import System.Random
import Control.Monad

-- generarPass genera una contraseña aleatoria de la longitud especificada.
generarPass :: Int -> IO String
generarPass longitud = do
    -- chars contiene todos los caracteres que se pueden usar en la contraseña.
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(){}[]=<>"
    -- Se genera un caracter aleatorio de chars tantas veces como longitud.
    pass <- replicateM longitud $ do
        -- Se genera un número aleatorio entre 0 y chars.length.
        randomIndex <- randomRIO (0, length chars - 1)
        -- Se devuelve el caracter de chars en la posición randomIndex.
        return $ chars !! randomIndex
    -- Se devuelve la contraseña.
    return pass

main :: IO ()
main = do
    -- Se obtiene la longitud de la contraseña de los argumentos de la línea de comandos.
    argv <- getArgs
    -- Si no se ha especificado la longitud de la contraseña o se pone algo distinto a un número, se muestra un mensaje de error.
    case argv of
        [arg] -> case reads arg of
            [(longitud, "")] -> do
                -- Se muestra la contraseña generada.
                pass <- generarPass longitud
                putStrLn pass
            _ -> error "Inserta un número válido para la longitud de la contraseña."
        _ -> error "Inserta un número válido para la longitud de la contraseña."
