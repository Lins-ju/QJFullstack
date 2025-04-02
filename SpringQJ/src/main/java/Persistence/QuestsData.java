package Persistence;

import Model.Question;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.UUID;

public abstract class QuestsData {

    public final String NewUUID()
    {
        return UUID.randomUUID().toString();
    }

    protected ArrayList<Question> GeoTypeQuestions = new ArrayList<Question>(
            Arrays.asList(
                    new Question(NewUUID(), "Which is the largest desert in the world?",
                            new String[] {"Sahara", "Arabian", "Gobi", "Antarctic"}, "Antarctic"),

                    new Question(NewUUID(), "What is the longest river in the world?",
                            new String[] {"Amazon", "Nile", "Yangtze", "Mississippi"}, "Nile"),

                    new Question(NewUUID(), "Which country has the most time zones?",
                            new String[] {"Russia", "United States", "France", "China"}, "France"),

                    new Question(NewUUID(), "What is the capital of Australia?",
                            new String[] {"Sydney", "Melbourne", "Canberra", "Brisbane"}, "Canberra"),

                    new Question(NewUUID(), "Which continent is the least populated?",
                            new String[] {"Africa", "Antarctica", "Australia", "South America"}, "Antarctica")

            )
    );

    protected ArrayList<Question> HistTypeQuestions = new ArrayList<Question>(
            Arrays.asList(
                    new Question(NewUUID(), "Who was the first President of the United States?",
                            new String[] {"Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"}, "George Washington"),

                    new Question(NewUUID(), "Which ancient civilization built the Great Pyramids of Giza?",
                            new String[] {"Greeks", "Romans", "Egyptians", "Mesopotamians"}, "Egyptians"),

                    new Question(NewUUID(), "What event marked the beginning of World War I?",
                            new String[] {"Bombing of Pearl Harbor", "Assassination of Archduke Franz Ferdinand", "Signing of the Treaty of Versailles", "Invasion of Poland"}, "Assassination of Archduke Franz Ferdinand"),

                    new Question(NewUUID(), "Which empire was ruled by Julius Caesar?",
                            new String[] {"Byzantine Empire", "Roman Empire", "Ottoman Empire", "British Empire"}, "Roman Empire"),

                    new Question(NewUUID(), "What was the main cause of the Cold War?",
                            new String[] {"Economic competition between Europe and Asia", "Tensions between the United States and the Soviet Union", "The discovery of nuclear weapons", "The fall of the Roman Empire"}, "Tensions between the United States and the Soviet Union")

            )
    );

    protected ArrayList<Question> BioTypeQuestions = new ArrayList<Question>(
            Arrays.asList(
                    new Question(NewUUID(), "What is the basic unit of life?",
                            new String[] {"Cell", "Atom", "Molecule", "Organ"}, "Cell"),

                    new Question(NewUUID(), "Which organ is responsible for pumping blood throughout the body?",
                            new String[] {"Lungs", "Liver", "Heart", "Brain"}, "Heart"),

                    new Question(NewUUID(), "What process do plants use to convert sunlight into energy?",
                            new String[] {"Respiration", "Photosynthesis", "Digestion", "Fermentation"}, "Photosynthesis"),

                    new Question(NewUUID(), "Which molecule carries genetic information in humans?",
                            new String[] {"RNA", "DNA", "Protein", "Carbohydrate"}, "DNA"),

                    new Question(NewUUID(), "What is the primary function of red blood cells?",
                            new String[] {"Fight infections", "Transport oxygen", "Digest food", "Produce hormones"}, "Transport oxygen")

            )
    );

    protected ArrayList<Question> ChemTypeQuestions = new ArrayList<Question>(
            Arrays.asList(
                    new Question(NewUUID(), "What is the chemical symbol for salt?",
                            new String[] {"CO₂", "H₂O", "O₂", "NaCl"}, "NaCl"),

                    new Question(NewUUID(), "Which element has the atomic number 1 in the periodic table?",
                            new String[] {"Helium", "Oxygen", "Hydrogen", "Carbon"}, "Hydrogen"),

                    new Question(NewUUID(), "What is the pH value of a neutral solution?",
                            new String[] {"0", "7", "10", "14"}, "7"),

                    new Question(NewUUID(), "What type of bond involves the sharing of electrons?",
                            new String[] {"Ionic bond", "Covalent bond", "Metallic bond", "Hydrogen bond"}, "Covalent bond"),

                    new Question(NewUUID(), "Which gas is most abundant in Earth's atmosphere?",
                            new String[] {"Oxygen", "Carbon dioxide", "Nitrogen", "Argon"}, "Nitrogen")

            )
    );
}
