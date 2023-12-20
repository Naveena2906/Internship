package naveena.task1.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import naveena.task1.Model.Signupmodel;

@Repository
public interface Signuprepo extends JpaRepository<Signupmodel,Integer>{
    public List<Signupmodel> findByPusernameAndPpassword(String pusername,String ppassword);
}
