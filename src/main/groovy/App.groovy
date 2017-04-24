/*
 * Gigantic class to allow everything, please find UML below :
    
    tag::uml[]
    class BlockProcessor
    class DiagramBlock
    class DitaaBlock
    class PlantUmlBlock

    BlockProcessor <|-- DiagramBlock
    DiagramBlock <|-- DitaaBlock
    DiagramBlock <|-- PlantUmlBlock
    end::uml[]

* @see java.lang.String
*/
class App{
    public static void main(){
        print("Look 'ma, I'm running an app !")
    }
}