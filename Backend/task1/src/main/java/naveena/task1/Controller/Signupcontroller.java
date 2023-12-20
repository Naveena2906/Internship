package naveena.task1.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import naveena.task1.Model.Product;
import naveena.task1.Model.Signupmodel;
import naveena.task1.Service.ProductService;
import naveena.task1.Service.Signupservice;

@CrossOrigin("*")
@RestController
public class Signupcontroller {
     @Autowired
    public Signupservice ss;

    @GetMapping("/get/sign")
    public List<Signupmodel> get() {
        return ss.getproduct();
    }

    @GetMapping("/getsign/{pid}")
    public Optional<Signupmodel> getpid(@PathVariable int pid) {
        return ss.getBypid(pid);
    }
  
    @GetMapping("/viewuserandpass/{pusername}/{ppassword}")
    public List<Signupmodel> getuserandname(@PathVariable String pusername,@PathVariable String ppassword)
    {
        return ss.getuserandpass(pusername, ppassword);
    }
    @PostMapping("/post/sign")
    public String add(@RequestBody Signupmodel sm) {
        return ss.postproduct(sm);
    }

    @PutMapping("/save/sign/{pid}")
    public String save(@RequestBody Signupmodel sm, @PathVariable int pid) {
        sm.setPid(pid);
        return ss.updateproduct(sm);
    }

    @DeleteMapping("/delete/sign/{pid}")
    public String delete(@PathVariable int pid) {
        return ss.deleteproduct(pid);
    }
}
