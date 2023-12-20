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
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import naveena.task1.Model.Product;
import naveena.task1.Service.ProductService;

@CrossOrigin("*")
@RestController
public class ProductController {
    @Autowired
    public ProductService ps;

    @GetMapping("/get/product")
    public List<Product> get() {
        return ps.getproduct();
    }

    @GetMapping("/getproduct/{pid}")
    public Optional<Product> getpid(@PathVariable int pid) {
        return ps.getBypid(pid);
    }

    @PostMapping("/post/product")
    public String add(@RequestBody Product pp) {
        return ps.postproduct(pp);
    }

    @PutMapping("/save/product/{pid}")
    public String save(@RequestBody Product pp, @PathVariable int pid) {
        pp.setPid(pid);
        return ps.updateproduct(pp);
    }

    @DeleteMapping("/delete/product/{pid}")
    public String delete(@PathVariable int pid) {
        return ps.deleteproduct(pid);
    }
}
