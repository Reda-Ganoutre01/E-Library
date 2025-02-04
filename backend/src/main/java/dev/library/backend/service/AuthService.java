package dev.library.backend.service;

// import java.nio.file.attribute.UserPrincipal;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.security.authentication.AuthenticationManager;
// import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
// import org.springframework.security.core.context.SecurityContextHolder;
// import org.springframework.security.core.Authentication;
// import org.springframework.security.crypto.password.PasswordEncoder;
// import jakarta.servlet.http.HttpSession;
import org.springframework.stereotype.Service;



@Service
public class AuthService {
    // private final AuthenticationManager authenticationManager;
    // private final PasswordEncoder passwordEncoder;
    // private final HttpSession httpSession;

    // private static final String SECRET_KEY = "1*g8n&#lr0*2jbz^0yn^)s9+9)wd5+^*5#tplk_r5ox(=lo^80";
    // private static final long EXPIRATION_TIME = 864_000_000;

    // @Autowired
    // public AuthService(AuthenticationManager authenticationManager, PasswordEncoder passwordEncoder , HttpSession httpSession) {
    //     this.authenticationManager = authenticationManager;
    //     this.passwordEncoder       = passwordEncoder;
    //     this.httpSession           = httpSession;
    // }

    // public String authenticateUser(String username, String password) {
    //     Authentication authentication = authenticationManager.authenticate(
    //         new UsernamePasswordAuthenticationToken(username, password)
    //     );

    //     SecurityContextHolder.getContext().setAuthentication(authentication);
    //     return generateJwtToken(authentication);
    // }

    // public String logoutUser() {
    //     httpSession.invalidate();
    //     return "User logged out successfully";
    // }

    // public UserPrincipal getCurrentUser() {
    //     return (UserPrincipal) httpSession.getAttribute("user");
    // }
}
