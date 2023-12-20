package naveena.task1.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "signup")
public class Signupmodel {
     @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer pid;
    private String ppassword;
    private String pusername;
    private String pname;
    private String pcategory;
    private String pbrand;
    private String pscreen;
    private String pram;
    private Integer pprice;
    private String pavailable;
    private String prole;
}
