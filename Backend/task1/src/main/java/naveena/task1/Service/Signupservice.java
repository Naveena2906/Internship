package naveena.task1.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import naveena.task1.Model.Signupmodel;
import naveena.task1.Repository.Signuprepo;

@Service
public class Signupservice {
     @Autowired
    public Signuprepo sr;
    public List<Signupmodel> getproduct()
    {
        return sr.findAll();
    }
    public List<Signupmodel> getuserandpass(String pusername,String ppassword)
    {
        return sr.findByPusernameAndPpassword(pusername, ppassword);
    }
    public String postproduct(Signupmodel sm)
    {
        sr.save(sm);
        return "Posted Successfully";
    }
    public String updateproduct(Signupmodel sm)
    {
        sr.save(sm);
        return "Updated Successfully";
    }
    public String deleteproduct(int pid)
    {
        sr.deleteById(pid);
        return "deleted";
    }
    public Optional<Signupmodel> getBypid(int pid)
    {
        return sr.findById(pid);
    }
}
